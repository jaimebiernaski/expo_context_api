import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import { Button } from 'react-native-elements';

import AuthScreen from '../screens/AuthScreen';

//Route Mapping
export type RootPublicStackParamsList = {
  Auth: undefined;
};

//Inform the createStackNavigator to use the route mapping
const PublicStack = createStackNavigator<RootPublicStackParamsList>();

const PublicNav = () => {
  return (
    <PublicStack.Navigator initialRouteName='Auth'>
      <PublicStack.Screen
        name='Auth'
        component={AuthScreen}
        options={{
          headerShown: false,
        }}
      />
      {/* <PublicStack.Screen
        name='Other'
        component={OtherScreen}
        options={({ navigation, route }) => ({
          gestureEnabled: false,
          title: '',
          headerStyle: {
            backgroundColor: 'black',
            shadowRadius: 0,
            shadowOffset: {
              height: 0,
            },
          },
          headerLeft: () => (
            <Button
              title='Cancel'
              onPress={() => {
                navigation.goBack();
                initUser();
                initItems();
              }}
              type='clear'
              titleStyle={{ color: 'red', marginLeft: 10 }}
            />
          ),
        })}
      /> */}
    </PublicStack.Navigator>
  );
};
export default PublicNav;
