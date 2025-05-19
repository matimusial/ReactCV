import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import pl from './pl.ts';
import en from './en.ts';

const savedLang = localStorage.getItem('language') || 'en';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    pl: { translation: pl },
  },
  lng: savedLang,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
