/**
 * LanguageSelector.test.tsx
 */

import React from 'react';

import { render, fireEvent, cleanup } from '@testing-library/react-native';
import { LanguageSelector } from './LanguageSelector';
import { languages } from '../../i18n';
import { setLang, currentLang } from '../../utils/languageUtils';

jest.mock('../../utils/languageUtils', () => ({
  setLang: jest.fn(),
  currentLang: jest.fn(() => 'pt_BR'),
}));

const setup = () => {
  return render(<LanguageSelector />);
};

describe('Language Selector', () => {
  test('render selector', () => {
    const { queryByTestId } = setup();
    expect(queryByTestId('lang-selector')).toBeTruthy();
  });
  test.each(languages)('lang option %o', (key, expected) => {
    const { queryByTestId } = setup();
    const element = queryByTestId(key);
    expect(element.props.children).toBe(expected);
    cleanup;
  });
  test.each(languages)('selector style %o', async (key, expected) => {
    const { queryByTestId } = setup();
    const element = queryByTestId(key);
    key === (await currentLang())
      ? expect(element.props.style.fontWeight).toBe('bold')
      : expect(element.props.style.fontWeight).toBe('normal');
    cleanup;
  });

  test('change language', () => {
    const { getByTestId } = setup();
    const lang: string = 'pt_BR';
    const button = getByTestId(`change-lang-to-${lang}`);
    fireEvent.press(button);
    expect(setLang).toHaveBeenCalledWith(lang);
  });
});
