import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

import translations_cs from './resources/cs.json';
import translations_en from './resources/en.json';

export default i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'cs',
    resources: {
      cs: {
        translantion: translations_cs
      },
      en: {
        tanslations: translations_en
      }
    }
  });