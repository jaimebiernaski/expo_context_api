import React from 'react';
import { render } from '@testing-library/react-native';
import ProfileScreen from './ProfileScreen';

let mockProps: any = { navigation: { navigate: jest.fn() } };

const setup = (props: any) => {
  const wrapper = render(<ProfileScreen {...props} />);
  return wrapper;
};

describe('testing profile screen', () => {
  test('button sign out is rendered', () => {
    const { getByText } = setup(mockProps);
    expect(getByText('Sign Out')).toBeTruthy();
  });
});
