/**
 * languageUtils.ts
 */

import * as SecureStore from 'expo-secure-store';
import i18n from 'i18next';
const LANG_KEY = 'userLanguage';

/**
 * Set app lang according to parameter
 * @param lang
 */
export const setLang = async (lang: string): Promise<void> => {
  i18n.changeLanguage(lang);
  await SecureStore.setItemAsync(LANG_KEY, lang);
};

/**
 * Get sored lang in local storage
 */
export const getLang = async (): Promise<string | null> => {
  const storedLang = await SecureStore.getItemAsync(LANG_KEY);
  return storedLang;
};

/**
 * Get active language in i18next
 */
export const currentLang = (): string => {
  return i18n.language;
};
