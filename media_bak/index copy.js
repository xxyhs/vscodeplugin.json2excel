const vscode = acquireVsCodeApi();

window.onerror = function (message, source, lineno, colno, error) {
    vscode.postMessage({
        type: 'webviewError',
        payload: {
            errmessage,
            source,
            lineno,
            colno,
            stack: error?.stack
        }
    })
};

// const {
//     provideVSCodeDesignSystem,
//     vsCodeButton
// } = VSCodeToolkit;

const {
    createApp,
    ref,
    reactive,
    watchEffect,
    onMounted
} = Vue;

// regsiter vscode-tookkit components

// provideVSCodeDesignSystem().register(vsCodeButton());

const dataTypeMap = {
    'string': 'string',
    'number': 'number',
    'bool': 'string',
    'date': 'date'
};

function getType(value) {
    return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
};

function parseSettingsContext(jsonData) {
    if (getType(jsonData) !== 'array') {
        return [];
    }
    if (jsonData.length === 0) {
        return [{
            prop: 'data',
            colName: 'data',
            dataType: 'string',
            selected: true
        }];
    }
    const firstItem = jsonData[0];
    let dataType = getType(firstItem);
    if (dataType !== 'object') {
        if (dataType === 'string' && dayjs(firstItem).isValid()) {
            dataType = 'date';
        }
        const colType = dataTypeMap[dataType] || 'string';

        return [{
            prop: 'data',
            colName: 'data',
            colType,
            selected: true
        }];
    }
    return Object.keys(firstItem).map(prop => {
        let propType = getType(firstItem[prop]);
        if (propType === 'string' && dayjs(firstItem[prop]).isValid()) {
            propType = 'date';
        }
        const colType = dataTypeMap[dataType] || 'string';
        return {
            prop,
            colName: prop,
            colType,
            selected: true
        };
    })
}

const app = createApp({
    setup() {
        const cachedSettings = ref([]);
        const cachedSettingsMap = reactive(new Map());
        const selectedSettingName = ref('');
        const settingsContext = reactive([]);
        const jsonData = reactive([]);
        const selectedSettingDetail = ref([]);
        const queryCachedSettings = () => {
            vscode.postMessage({
                type: 'querySettingList'
            })
        };

        const saveSettings = () => {
            vscode.postMessage({
                type: 'saveSettings',
                payload: settingsContext
            })
        };

        const exportExcel = () => {
            vscode.postMessage({
                type: 'exportExcel',
                payload: {
                    data: jsonData,
                    settings: settingsContext
                }
            })
        };

        watchEffect(() => {
            if (selectedSettingName.value) {
                const settingsDetail = cachedSettingsMap.get(selectedSettingName.value)
                if (!settingsDetail) {
                    const selectedItem = cachedSettings.value.find(t => t.settingName === selectedSettingName.value)
                    vscode.postMessage({
                        type: 'querySettingDetail',
                        payload: selectedItem
                    })
                } else {
                    selectedSettingDetail.value = cachedSettingsMap.get(selectedSettingName.value)
                }
            }
        });

        onMounted(() => {
            vscode.postMessage({ type: 'dev', payload: 'vue mounted' });
            window.addEventListener('message', event => {
                const message = event.data;
                switch (message.type) {
                    case 'jsonUpdate': {
                        jsonData.value = message.payload;
                        settingsContext.value = parseSettingsContext(message.payload);
                        break;
                    }
                    case 'detailSettingsResp': {
                        const { settingName, settingsDetail } = message.payload;
                        cachedSettingsMap.set(settingName, settingsDetail);
                        selectedSettingDetail.value = cachedSettingsMap.get(selectedSettingName.value);
                        break;
                    }
                    case 'settingsListResp': {
                        cachedSettings.value = message.payload;
                        break;
                    }
                    case 'settingsListUpdated': {
                        queryCachedSettings();
                        break;
                    }
                    default: break;
                }
            });
            vscode.postMessage({ type: 'ready' });
            queryCachedSettings()
        });

        return {
            cachedSettings,
            cachedSettingsMap,
            selectedSettingName,
            settingsContext,
            jsonData,
            selectedSettingDetail,
            saveSettings,
            exportExcel
        };
    }
});

// app.config.compilerOptions.isCustomElement = tag =>
//     tag.startsWith('vscode-');

app.mount('#app');
