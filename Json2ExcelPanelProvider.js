const dayjs = require('dayjs');
const vscode = require('vscode');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { fastExport } = require('./Json2ExcelService');
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
      } else if (message.type === 'querySettingDetail') {
        // webview query the specifed settings detail by listSetting's item
        this.querySpecifiedSettings(message.payload)
      } else if (message.type === 'exportExcel') {
        const { data, settings } = message.payload
        this.saveExcel(data, settings)
      } else if (message.type === 'webviewError') {
        const logPath = vscode.Uri.joinPath(this._context.extensionUri, 'logs', dayjs().format('YYYYMMDD') + '.log')
        const {
            errMsg,
            info,
            stack
        } = message.payload
        fs.appendFileSync(logPath.fsPath, `${dayjs().format('HH:mm:ss')}\t${errMsg}\t${info}\t${stack}\r\n`);
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
      'webview.html'
    );

    let html = fs.readFileSync(htmlPath.fsPath, 'utf8');

    const scriptUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._context.extensionUri, 'media', 'index.js')
    );

    const faviconUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._context.extensionUri, 'media', 'favicon.icon')
    );

    const styleUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._context.extensionUri, 'media', 'style.css')
    );

    const nonce = getNonce();

    console.log(webview.cspSource)
    html = html
      .replaceAll('{{scriptUri}}', scriptUri)
      .replaceAll('{{styleUri}}', styleUri)
      .replaceAll('{{cspSource}}', webview.cspSource)
      .replaceAll('{{faviconUri}}', faviconUri)
      .replaceAll('{{nonce}}', nonce);
    
    return html;
  }

  async saveExportSettings(settings) {
    if (!this._context.storageUri) {
      vscode.window.showErrorMessage(vscode.l10n.t('information.saveforbid'))
      return
    };

    const name = await vscode.window.showInputBox({
      placeHolder: vscode.l10n.t('information.settingNamePlaceholder'),
      title: vscode.l10n.t('information.settingNameTitle'),
      validateInput(value) {
        if (!/^[a-zA-Z0-9\u4e00-\u9fa5\-_\.\s]+$/.test(value)) {
          return {
            message: vscode.l10n.t('information.settingNameError'), 
            severity: vscode.InputBoxValidationSeverity.Error
          };
        }
        if (value.length > 64) {
          return {
            message: vscode.l10n.t('information.settingNameTooLong'), 
            severity: vscode.InputBoxValidationSeverity.Error
          };
        }
      }
    })
    if (name) {
      const filePath = path.join(this._context.storageUri.fsPath, `${name}.j2esettings.json`)
      if (fs.existsSync(filePath)) {
        const choice = await vscode.window.showWarningMessage(
          vscode.l10n.t('information.fileexisted'),
          { modal: true },
          vscode.l10n.t('information.coverit'),
          vscode.l10n.t('information.rename')
        )
        if (choice === vscode.l10n.t('information.coverit')) {
          fs.writeFileSync(filePath, JSON.stringify(settings, null, 2), { encoding: 'utf-8' });
          vscode.window.showInformationMessage(vscode.l10n.t('information.settingsaved'));
          this.postMessage({
            type: 'settingsListUpdated'
          })
        } else if (choice === vscode.l10n.t('information.coverit')) {
          await this.saveExportSettings(settings)
        }
        return
      }
      if (!fs.existsSync(this._context.storageUri.fsPath)) {
        fs.mkdirSync(this._context.storageUri.fsPath, { recursive: true });
      }
      fs.writeFileSync(filePath, JSON.stringify(settings, null, 2), { encoding: 'utf-8' });
      vscode.window.showInformationMessage(vscode.l10n.t('information.settingsaved'));
      this.postMessage({
        type: 'settingsListUpdated'
      })
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
    await fastExport(data, uri.fsPath, settings)
    
    vscode.window.showInformationMessage(vscode.l10n.t('information.filesaved', uri.fsPath));
  }

  listExportSettings() {
    if (!this._context.storageUri) {
      this.postMessage({
        type: 'settingsListResp',
        payload: []
      })
      return
    }
    if (!fs.existsSync(this._context.storageUri.fsPath)) {
      this.postMessage({
        type: 'settingsListResp',
        payload: []
      })
      return
    }
    const files = fs.readdirSync(this._context.storageUri.fsPath);
    const settingsCache = files.filter(file => file.endsWith('.j2esettings.json')).map(file => {
      return {
        filename: file,
        settingName: file.replace('.j2esettings.json', ''),
      }
    })
    this.postMessage({
      type: 'settingsListResp',
      payload: settingsCache
    })
  }

  querySpecifiedSettings(cacheInfo) {
    const { fileName, settingName } = cacheInfo
    if (!this._context.storageUri) {
      this.postMessage({
        type: 'detailSettingsResp',
        payload: {
          settingName,
          settingsDetail: []
        }
      })
      return
    }
    const fullPath = path.join(this._context.storageUri.fsPath, fileName)
    if (!fs.existsSync(fullPath)) {
      this.postMessage({
        type: 'detailSettingsResp',
        payload: {
          settingName,
          settingsDetail: []
        }
      })
      return
    }
    try {
      const content = JSON.parse(fs.readFileSync(fullPath, { encoding: 'utf-8' }))
      this.postMessage({
        type: 'detailSettingsResp',
        payload: {
          settingName,
          settingsDetail: content
        }
      })
    } catch {
      this.postMessage({
        type: 'detailSettingsResp',
        settingsDetail: []
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