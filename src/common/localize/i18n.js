import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEn from './translation.en';
import translationJa from './translation.ja';

const resource = {
  en: {
    translation: translationEn,
  },
  ko: {
    translation: translationJa,
  },
};

i18n.use(initReactI18next).init({
  resources: resource,
  lng: 'ko',
  fallbackLng: 'ko',
  debug: true,
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
