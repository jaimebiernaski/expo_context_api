/**
 * LanguageSelector.tsx
 */

import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

import { languages } from '../../i18n';
import { setLang, currentLang } from '../../utils/languageUtils';

export const LanguageSelector: React.FC = (): JSX.Element => {
  return (
    <View testID='lang-selector' style={customStyles.container}>
      {languages.map((lang) => {
        return (
          <TouchableOpacity
            testID={`change-lang-to-${lang[0]}`}
            key={lang[0]}
            onPress={() => setLang(lang[0])}
            style={customStyles.touch}
          >
            <Text
              testID={lang[0]}
              style={{
                fontWeight: lang[0] === currentLang() ? 'bold' : 'normal',
              }}
            >
              {lang[1]}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const customStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
  },
  touch: {
    padding: 7,
  },
});
