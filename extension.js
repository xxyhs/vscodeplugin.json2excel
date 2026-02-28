// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const Json2ExcelPanelProvider = require('./Json2ExcelPanelProvider');

let currentPanel = undefined;
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "excelexporter" is now active!');
	// Check Current Active TextEditor
	showContextMenu()
	// Watch Editor Selection if json array was selected show the context menu
	vscode.window.onDidChangeTextEditorSelection(() => {
		showContextMenu()
	});

	vscode.window.onDidChangeNotebookEditorSelection(() => {
		showContextMenu()
	})

	vscode.window.onDidChangeActiveNotebookEditor(() => {
		showContextMenu()
	})

	vscode.window.onDidChangeActiveTextEditor(() => {
		showContextMenu()
	})
	const json2ExcelPanelProvider = new Json2ExcelPanelProvider(context);
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('excelExporter.json2excel', async () => {
		if (currentPanel) {
			currentPanel.reveal(vscode.ViewColumn.Beside);
		} else {
			currentPanel = vscode.window.createWebviewPanel(
				'JSON2ExcelWebView',
				vscode.l10n.t('Export Settings'),
				vscode.ViewColumn.Beside,
				{
					enableScripts: true,
					localResourceRoots: [
						vscode.Uri.joinPath(context.extensionUri, 'media')
					],
					retainContextWhenHidden: true
				}
			);
			currentPanel.iconPath = vscode.Uri.joinPath(context.extensionUri, 'media', 'icon-excel.svg');
			currentPanel.onDidDispose(() => {
				json2ExcelPanelProvider.webviewDispose()
				currentPanel = undefined
			});
			json2ExcelPanelProvider.resolvePanelWebview(currentPanel)
		}
		// render the jsonfile or selection
		parseJsonArray(json2ExcelPanelProvider)
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() { }

async function parseJsonArray(provider) {
	let text = getActiveJsonOrSelectionText();
	if (!text) {
		// read clipboard's text
		const clipboardText = await vscode.env.clipboard.readText();
		if (clipboardText) {
			text = clipboardText
		}
	}
	try {
		const json = JSON.parse(text);
		if (!Array.isArray(json)) {
			vscode.window.showErrorMessage(vscode.l10n.t('The selected JSON is not an array.'));
			return;
		}
		provider.postMessage({
			type: 'jsonUpdate',
			payload: json
		});
	} catch {
		provider.postMessage({
			type: 'jsonUpdate',
			payload: []
		});
		vscode.window.showErrorMessage(vscode.l10n.t('Invalid JSON'));
	}
}

function showContextMenu() {
	const text = getActiveJsonOrSelectionText()
	let isJsonArray = false;
	if (text) {
		try {
			const parsed = JSON.parse(text);
			isJsonArray = Array.isArray(parsed);
		} catch { }
	}
	vscode.commands.executeCommand(
		'setContext',
		'excelExporter.isJsonArray',
		isJsonArray
	);
}

function getActiveJsonOrSelectionText () {
	const editor = vscode.window.activeTextEditor;
	let text = ''
	if (editor) {
		if (!editor.selection.isEmpty) {
			text = editor.document.getText(editor.selection);
		} else if (editor.document.languageId === 'json') {
			text = editor.document.getText();
		}
	} else {
		const nbEditor = vscode.window.activeNotebookEditor;
		if (nbEditor) {
			if (nbEditor.selections.length) {
				const selectedCells = nbEditor.selections
      		.flatMap(range => nbEditor.notebook.getCells(range));
				text = selectedCells.map(c => c.document.getText()).join("\n");
			}
		}
	}
	return text
}

module.exports = {
	activate,
	deactivate
}
