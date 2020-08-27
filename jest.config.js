module.exports = {
  preset: 'jest-expo',
  // ref: https://blog.expo.io/testing-universal-react-native-apps-with-jest-and-expo-113b4bf9cc44
  // preset: 'jest-expo/universal',

  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*)',
  ],
};
