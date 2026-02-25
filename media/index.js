const vscode = acquireVsCodeApi();

const { createApp, ref, reactive, watchEffect, computed, onMounted } = Vue;

createApp({
    setup() {
        const cachedSettings = reactive([]);
        const cachedSettingsMap = reactive(new Map());
        const selectedSettingName = ref('');
        const selectedSettingDetail = reactive([]);
        const settingsContext = reactive([]);
        const jsonData = reactive([]);
        const saveContext = reactive({
            converedIfNameExist: false,
            newSetting: ''
        });

        const columns = computed(() => {
            const cols = new Set()
            jsonData.forEach(t => {
            });(t => Object.keys(t))
        })

        onMounted(() => {
            window.addEventListener('message', event => {
                const message = event.data;
                if (message.type === 'jsonUpdate') {
                    jsonData.value = message.payload
                }
            });

            vscode.postMessage({ type: 'ready' });
            queryCachedSettings()
        });

        function saveSettings () {
            vscode.postMessage({
                type: 'saveSettings',
                payload: settingsContext
            })
        }

        function queryCachedSettings () {
            vscode.postMessage({
                type: 'querySettingList'
            })
        }

        function exportExcel () {
            vscode.postMessage({
                type: 'exportExcel',
                payload: {
                    data: jsonData,
                    settings: settingsContext
                }
            })
        }
    }
})
