import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppNavigation from './src/navigation/AppNavigation';
import { Provider as AuthProvider } from './src/context/AuthContext';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <>
        <StatusBar style='auto' />
        <AppNavigation />
      </>
    </AuthProvider>
  );
};

export default App;
