import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

import en from '../src/locales/en.json';
import zh_tw from '../src/locales/zh_tw.json';

const resources = {
  en: {
    translation: en,
  },
  zh_tw: {
    translation: zh_tw,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
