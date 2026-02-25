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
	vscode.window.onDidChangeTextEditorSelection(event => {
		showContextMenu(event.textEditor)
	});

	vscode.window.onDidChangeActiveTextEditor((event) => {
		showContextMenu(event)
	})
	const json2ExcelPanelProvider = new Json2ExcelPanelProvider(context);
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('excelExporter.json2excel', () => {
		if (currentPanel) {
			currentPanel.reveal(vscode.ViewColumn.Beside);
		} else {
			currentPanel = vscode.window.createWebviewPanel(
				'JSON2ExcelWebView',
				'ExporterSettings',
				vscode.ViewColumn.Beside,
				{
					enableScripts: true,
					localResourceRoots: [
						vscode.Uri.joinPath(context.extensionUri, 'media')
					],
					retainContextWhenHidden: true
				}
			);
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

function parseJsonArray(provider) {
	const editor = vscode.window.activeTextEditor;
	if (!editor) return;
	const selection = editor.selection;
	let text = editor.document.getText(selection);
	if (!text && editor.document.languageId === 'json') {
		text = editor.document.getText()
	}
	console.log('get active text:', text)
	try {
		const json = JSON.parse(text);

		if (!Array.isArray(json)) {
			vscode.window.showErrorMessage('Selected JSON is not an array');
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
		vscode.window.showErrorMessage('Invalid JSON');
	}
}

function showContextMenu(textEditor) {
	const editor = textEditor || vscode.window.activeTextEditor;
	let text = editor.document.getText(editor.selection);
	let isJsonArray = false;
	if (text) {
		try {
			const parsed = JSON.parse(text);
			isJsonArray = Array.isArray(parsed);
		} catch { }
	} else if (editor.document.languageId === 'json') {
		const text = editor.document.getText()
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

module.exports = {
	activate,
	deactivate
}
