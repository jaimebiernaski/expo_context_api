import React, { useContext } from 'react';
import { Context as AuthContext } from '../context/AuthContext';
import { NavigationContainer } from '@react-navigation/native';

import PublicNav from './PublicNav';
import PrivateNav from './PrivateNav';

const AppNavigation = () => {
  const { state, localSignin } = useContext(AuthContext);

  React.useEffect(() => {
    localSignin();
  });

  return (
    <NavigationContainer>
      {state.token === null ? <PublicNav /> : <PrivateNav />}
    </NavigationContainer>
  );
};

export default AppNavigation;
