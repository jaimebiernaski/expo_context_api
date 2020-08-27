/**
 * I18N Setup
 */

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';
import { getLang } from '../utils/languageUtils';

import en from './languages/en';
import es from './languages/es';
import pt_BR from './languages/pt_BR';

export const defaultLang: string = 'en';
export const languages: Array<[string, string]> = [
  ['en', 'English'],
  ['pt_BR', 'Português'],
  ['es', 'Español'],
];
const loadLanguage = async () => {
  let language: string | null = await getLang();
  return language;
};

let l = loadLanguage();

i18n
  .use({
    type: 'languageDetector',
    async: true,
    init: () => {},
    detect: async (callback: Function) => {
      try {
        let language: string | null = await getLang();
        if (language) {
          callback(language);
        } else {
          let localeLang: string = Localization.locale;
          callback(localeLang || defaultLang);
        }
      } catch (error) {}
    },
    cacheUserLanguage: () => {},
  })
  .use(initReactI18next)
  .init({
    //lng: defaultLang,
    fallbackLng: defaultLang,
    resources: {
      en,
      es,
      pt_BR,
    },
    react: {
      useSuspense: false,
    },
    debug: false,
    interpolation: {
      escapeValue: false, // not needed for react
    },
  });

export default i18n;
