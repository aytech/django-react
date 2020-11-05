import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from './locale/en'
import cs from './locale/cs'

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    resources: { en, cs },

    keySeparator: false,

    interpolation: {
      escapeValue: false // React already escapes against XSS
    }
  })

export default i18n