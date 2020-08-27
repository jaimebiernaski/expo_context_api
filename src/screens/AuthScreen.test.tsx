import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import AuthScreen from './AuthScreen';

let mockProps: any = { navigation: { navigate: jest.fn() } };

const setup = (props: any) => {
  const wrapper = render(<AuthScreen {...props} />);
  return wrapper;
};

describe('testing auth screen', () => {
  test('welcome traslated', () => {
    const { getByText } = setup(mockProps);
    expect(getByText('welcome')).toBeTruthy();
  });

  test('button sign in is rendered', () => {
    const { getByText } = setup(mockProps);
    expect(getByText('Sign In')).toBeTruthy();
  });
});
