<script setup>
import { ref, reactive, onMounted, watchEffect, toRaw, onBeforeMount } from 'vue';
import { parseSettingsContext } from './utils'
// debug webview in browser with a mock vscode
const vscode = import.meta.env.DEV ? {
  postMessage: (message) => {
    console.log('mock send message:', JSON.stringify(message))
  }
} : acquireVsCodeApi();


const cachedSettings = ref([]);
const cachedSettingsMap = reactive(new Map());
const selectedSettingName = ref('');
const settingsContext = ref([]);
const jsonData = ref([]);
const selectedSettingDetail = ref([]);

const queryCachedSettings = () => {
  vscode.postMessage({
    type: 'querySettingList'
  });
  if (import.meta.env.DEV) {
    cachedSettings.value = [
      {
        settingName: 'dev1',
        fileName: 'dev.j2esetting.json'
      }
    ]
  }
};

const saveSettings = () => {
  vscode.postMessage({
    type: 'saveSettings',
    payload: toRaw(settingsContext.value)
  })
};

const exportExcel = () => {
  vscode.postMessage({
    type: 'exportExcel',
    payload: {
      data: toRaw(jsonData.value),
      settings: toRaw(settingsContext.value)
    }
  })
};

const colToggle = (colSetting, evt) => {
  colSetting.selected = evt.target.checked
}

watchEffect(() => {
  if (selectedSettingName.value) {
    const settingsDetail = cachedSettingsMap.get(selectedSettingName.value)
    if (!settingsDetail) {
      const selectedItem = cachedSettings.value.find(t => t.settingName === selectedSettingName.value)
      vscode.postMessage({
        type: 'querySettingDetail',
        payload: toRaw(selectedItem)
      })
    } else {
      selectedSettingDetail.value = cachedSettingsMap.get(selectedSettingName.value)
    }
  }
});

onBeforeMount(() => {
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
        cachedSettings.value = message.payload
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
});

onMounted(() => {
  if (import.meta.env.DEV) {
    const devData = [
      {
        name: 'xiong',
        gender: 'female',
        birthDay: '1992-10-10'
      },
      {
        name: 'shi',
        gender: 'male',
        birthDay: '2002-09-15'
      }
    ]
    jsonData.value = devData
    settingsContext.value = parseSettingsContext(devData)
  }
  window.addEventListener('paste', (e) => {
    const target = e.target;

    const isInput =
      target instanceof HTMLInputElement ||
      target instanceof HTMLTextAreaElement ||
      target.isContentEditable;

    if (!isInput) {
      e.preventDefault();
      const text = e.clipboardData?.getData('text');
      try {
        const json = JSON.parse(text);
        if (Array.isArray(json)) {
          vscode.postMessage({
            type: 'paste',
            payload: json
          });
        }
      } catch {
        vscode.postMessage({
          type: 'pasteCantUse'
        });
      }
    }
  })
  queryCachedSettings();
})

</script>

<template>
  <div class="header">
    <div class="left">
      <vscode-button appearance="primary" @click="exportExcel">{{ $t('Export Excel') }}</vscode-button>
      <vscode-button appearance="secondary" @click="saveSettings">{{ $t('Save Settings') }}</vscode-button>
    </div>
    <div v-if="cachedSettings && cachedSettings.length" class="right">
      <label>{{ $t('History Settings') }}</label>
      <vscode-dropdown v-model="selectedSettingName">
        <vscode-option value="" :selected="selectedSettingName === ''">{{ $t('Do not use history settings')
          }}</vscode-option>
        <vscode-option v-for="setting in cachedSettings" :key="setting.settingName" :value="setting.settingName"
          :selected="selectedSettingName === setting.settingName">{{ setting.settingName }}</vscode-option>
      </vscode-dropdown>
    </div>
  </div>
  <vscode-divider role="separator"></vscode-divider>
  <div class="j2e-settings">
    <vscode-data-grid grid-template-columns="80px 1fr 1.5fr 150px">
      <vscode-data-grid-row row-type="header">
        <vscode-data-grid-cell cell-type="columnheader" grid-column="1">
          {{ $t('Export') }}?
        </vscode-data-grid-cell>
        <vscode-data-grid-cell cell-type="columnheader" grid-column="2">
          {{ $t('Property Name') }}
        </vscode-data-grid-cell>
        <vscode-data-grid-cell cell-type="columnheader" grid-column="3">
          {{ $t('Column Name') }}
        </vscode-data-grid-cell>
        <vscode-data-grid-cell cell-type="columnheader" grid-column="4">
          {{ $t('Column Type') }}
        </vscode-data-grid-cell>
      </vscode-data-grid-row>
      <vscode-data-grid-row v-for="colSetting in settingsContext">
        <vscode-data-grid-cell grid-column="1">
          <vscode-checkbox :checked="colSetting.selected" @change="(evt) => colToggle(colSetting, evt)" />
        </vscode-data-grid-cell>
        <vscode-data-grid-cell grid-column="2">
          {{ colSetting.prop }}
        </vscode-data-grid-cell>
        <vscode-data-grid-cell grid-column="3">
          <vscode-text-field v-model="colSetting.colName"></vscode-text-field>
        </vscode-data-grid-cell>
        <vscode-data-grid-cell grid-column="4">
          <vscode-dropdown v-model="colSetting.colType">
            <vscode-option value="string">{{ $t('String') }}</vscode-option>
            <vscode-option value="number">{{ $t('Number') }}</vscode-option>
            <vscode-option value="date">{{ $t('Date') }}</vscode-option>
          </vscode-dropdown>
        </vscode-data-grid-cell>
      </vscode-data-grid-row>
    </vscode-data-grid>
  </div>
</template>
