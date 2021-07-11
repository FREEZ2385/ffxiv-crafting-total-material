import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEn from './translation.en';
import translationJa from './translation.ja';

const resources = {
  en: {
    translation: translationEn,
  },
  ja: {
    translation: translationJa,
  },
};

i18n.use(initReactI18next).init({
  resources: resources,
  fallbackLng: 'en',
  debug: false,
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
