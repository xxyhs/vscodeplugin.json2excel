import transZhCN from '@/locales/zhcn.json'
import transEn from '@/locales/en.json'

/**
 * navigator.language  中文返回的是 zh-CN，英文返回的是 en
 * 但 i18next 语言包命名是 zh_CN 和 en
 * 所以这里做个映射
 */
export default {
  debug: import.meta.env.DEV,
  fallbackLng: 'en',
  detection: {
    order: ['htmlTag', 'navigator'],
    convertDetectedLanguage: (lng) => lng.replace('-', '').replace('_', '').toLowerCase()
  },
  resources: {
    en: {
      nativeName: 'English',
      translation: transEn
    },
    zhcn: {
      nativeName: '简体中文',
      translation: transZhCN
    }
  }
}
