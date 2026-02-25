const vscode = require('vscode');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { fastExport } = require('./Json2ExcelService')
class Json2ExcelPanelProvider {
  constructor(context) {
    this._context = context
    this._view = undefined;
    this.webViewReady = false;
    this.lastJsonArray = []
  }

  resolvePanelWebview(pannel) {
    this._view = pannel;
    pannel.webview.onDidReceiveMessage(message => {
      console.log('receive message from webview', message)
      if (message.type === 'ready') {
        // When the panel is opened for the first time, post the json data to webview for render
        this.webViewReady = true
        this.postMessage({
          type: 'jsonUpdate',
          payload: this.lastJsonArray
        })
      } else if (message.type === 'saveSettings') {
        // webview send the form data for persistence
        this.saveExportSettings(message.payload)
      } else if (message.type === 'querySettingList') {
        // webview query the persisted settings list
        this.listExportSettings()
      } else if (message.type === 'detailSetting') {
        // webview query the specifed settings detail by listSetting's item
        const { fileName } = message.payload
        this.querySpecifiedSettings(fileName)
      } else if (message.type === 'exportExcel') {
        const { data, settings } = message.payload
        this.saveExcel(data, settings)
      }
    })
    pannel.webview.html = this.getHtml(pannel.webview);
  }

  webviewDispose() {
    this._view = undefined
    this.webViewReady = false
    this.lastJsonArray = []
  }

  postMessage(message) {
    if (!this._view) return;
    if (this.webViewReady) {
      this._view.webview.postMessage(message);
      this.lastJsonArray = []
      console.log('extension sent message', message)
    } else {
      if (message.type === 'jsonUpdate') {
        this.lastJsonArray = message.payload
        console.log('extension cache message', message)
      } else {
        console.log('extension sent message failed', message)
      }
    }
  }

  getHtml(webview) {
    const htmlPath = vscode.Uri.joinPath(
      this._context.extensionUri,
      'media',
      'index.html'
    );

    let html = fs.readFileSync(htmlPath.fsPath, 'utf8');

    const scriptUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._context.extensionUri, 'media', 'index.js')
    );

    const vueUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._context.extensionUri, 'media', 'vue.global.prod.js')
    );

    const styleUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._context.extensionUri, 'media', 'style.css')
    );

    const nonce = getNonce();

    html = html
      .replaceAll('{{scriptUri}}', scriptUri)
      .replaceAll('{{styleUri}}', styleUri)
      .replaceAll('{{vueUri}}', vueUri)
      .replaceAll('{{nonce}}', nonce);
    return html;
  }

  async saveExportSettings(settings) {
    if (!this._context.storageUri) {
      vscode.window.showErrorMessage('Due to possible system settings issues, the settings data cannot be saved at this time.')
      return
    };

    const name = await vscode.window.showInputBox({
      placeHolder: 'please input the setting\'s name',
      title: 'Please Input The Setting\'s Name',
      validateInput(value) {
        if (!/^[a-zA-Z0-9\u4e00-\u9fa5\-_\.\s]+$/.test(value)) {
          return { message: `filename contain invalid character`, severity: vscode.InputBoxValidationSeverity.Error };
        }
        if (value.length > 64) {
          return { message: `filename is too long`, severity: vscode.InputBoxValidationSeverity.Error };
        }
      }
    })
    if (name) {
      const filePath = path.join(this._context.storageUri.fsPath, `${name}.j2esettings.json`)
      if (fs.existsSync(filePath)) {
        const choice = await vscode.window.showQuickPick([
          {
            label: 'Cover It',
            value: 'yes'
          },
          {
            label: 'Rename',
            value: 'No'
          }
        ], {
          title: 'FileName Existed!',
        })
        if (choice && choice.value === 'yes') {
          fs.writeFileSync(filePath, JSON.stringify(settings, null, 2), { encoding: 'utf-8' });
        } else {
          await this.saveExportSettings(settings)
        }
        return
      }
      if (!fs.existsSync(this._context.storageUri.fsPath)) {
        fs.mkdirSync(this._context.storageUri.fsPath, { recursive: true });
      }
      fs.writeFileSync(filePath, JSON.stringify(settings, null, 2), { encoding: 'utf-8' });
    }
  }

  async saveExcel(data, settings) {
    const suggestedName = `json2excel_${new Date().getTime()}.xlsx`;
    const uri = await vscode.window.showSaveDialog({
      filters: {
        'Excel Workbook': ['xlsx']
      },
      defaultUri: vscode.Uri.file(path.join(os.homedir(), suggestedName)),
    })
    if (!uri) {
      return
    }
    await fastExport(data, uri.path)
    vscode.window.showInformationMessage(`文件已保存至：${path.basename(uri.path)}`);
  }

  listExportSettings() {
    if (!this._context.storageUri) {
      this.postMessage({
        type: 'listSettings',
        payload: []
      })
      return
    }
    const files = fs.readdirSync(this._context.storageUri.fsPath)
    const settingsCache = files.filter(file => file.endsWith('.j2esettings.json')).map(file => {
      return {
        filename: file,
        settingName: file.replace('.j2esettings.json', ''),
      }
    })
    this.postMessage({
      type: 'listSettings',
      payload: settingsCache
    })
  }

  querySpecifiedSettings(fileName) {
    if (!this._context.storageUri) {
      this.postMessage({
        type: 'detailSettings',
        payload: []
      })
      return
    }
    const fullPath = path.join(this._context.storageUri.fsPath, fileName)
    if (!fs.existsSync(fullPath)) {
      this.postMessage({
        type: 'detailSettings',
        payload: []
      })
      return
    }
    try {
      const content = JSON.parse(fs.readFileSync(fullPath, { encoding: 'utf-8' }))
      this.postMessage({
        type: 'detailSettings',
        payload: content
      })
    } catch {
      this.postMessage({
        type: 'detailSettings',
        payload: []
      })
    }
  }
}

function getNonce() {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let value = '';
  for (let i = 0; i < 32; i++) {
    value += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return value;
}

module.exports = Json2ExcelPanelProvider