import React from 'react';
import { render } from '@testing-library/react-native';
import HomeScreen from './HomeScreen';

let mockProps: any = { navigation: { navigate: jest.fn() } };

const setup = (props: any) => {
  const wrapper = render(<HomeScreen {...props} />);
  return wrapper;
};

describe('testing home screen', () => {
  test('testing home is render', () => {
    const { getByText } = setup(mockProps);
    expect(getByText('Home')).toBeTruthy();
  });
});
