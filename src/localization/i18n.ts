import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import translations_cs from './resources/cs.json';
import translations_en from './resources/en.json';
import { ILanguageOption } from "../interfaces/ILanguageOption";

export const SupportedLanguages: ILanguageOption[] = [
  {
    key: 'cs'
  },
  {
    key: 'en'
  }
];

export const FallbackLanguage: ILanguageOption = SupportedLanguages[0];

i18next
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: FallbackLanguage.key,
    keySeparator: '.',
    resources: {
      cs: {
        translation: translations_cs
      },
      en: {
        translation: translations_en
      }
    },
  });

export default i18next;