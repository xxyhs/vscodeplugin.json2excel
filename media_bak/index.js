const vscode = acquireVsCodeApi();

window.onerror = function (message, source, lineno, colno, error) {
    vscode.postMessage({
        type: 'webviewError',
        payload: {
            errmessage: message,
            source,
            lineno,
            colno,
            stack: error?.stack
        }
    })
};

const {
    provideVSCodeDesignSystem,
    vsCodeButton
} = VSCodeToolkit;


provideVSCodeDesignSystem().register(vsCodeButton());
let jsonData = []
window.addEventListener('message', event => {
    const message = event.data;
    switch (message.type) {
        case 'jsonUpdate': {
            jsonData = message.payload;
            console.log(jsonData)
            break;
        }
        default: break;
    }
});

window.addEventListener('DOMContentLoaded', () => {
    vscode.postMessage({ type: 'ready' });
});

document.getElementById('test1').addEventListener('click', () => {
    vscode.postMessage({
        type: 'saveSettings',
        payload: jsonData
    })
});

document.getElementById('test2').addEventListener('click', () => {
    vscode.postMessage({
        type: 'exportExcel',
        payload: {
            data: jsonData,
            settings: []
        }
    })
});

