import { createApp } from 'vue'
import './style.css';
import App from './App.vue'
import i18n from './i18n'
import i18nOptions from './i18n-options.js'
import {
  provideVSCodeDesignSystem,
  vsCodeButton,
  vsCodeCheckbox,
  vsCodeProgressRing,
  vsCodeRadio,
  vsCodeRadioGroup,
  vsCodeDataGrid,
  vsCodeBadge,
  vsCodeDivider,
  vsCodeLink,
  vsCodeDropdown,
  vsCodeOption,
  vsCodeTag,
  vsCodeTextArea,
  vsCodeTextField,
  vsCodeDataGridRow,
  vsCodeDataGridCell,
} from '@vsCode/webview-ui-toolkit';

provideVSCodeDesignSystem().register(
  vsCodeButton(),
  vsCodeCheckbox(),
  vsCodeProgressRing(),
  vsCodeRadio(),
  vsCodeRadioGroup(),
  vsCodeDataGrid(),
  vsCodeBadge(),
  vsCodeDivider(),
  vsCodeLink(),
  vsCodeDropdown(),
  vsCodeOption(),
  vsCodeTag(),
  vsCodeTextArea(),
  vsCodeTextField(),
  vsCodeDataGridRow(),
  vsCodeDataGridCell(),
);

const app = createApp(App);
app.use(i18n, i18nOptions);

app.config.errorHandler = (error, instance, info) => {
  const vscode = import.meta.env.DEV ? {
    postMessage: (message) => {
      console.log('mock send message:', JSON.stringify(message))
    }
  } : acquireVsCodeApi();

  vscode.postMessage({
    type: 'webviewError',
    payload: {
      errMsg: error?.message,
      info,
      stack: error?.stack
    }
  })
};

app.mount('#app');
