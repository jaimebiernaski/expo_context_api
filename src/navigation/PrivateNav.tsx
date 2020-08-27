import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

export type RootPrivateTabParamsList = {
  Home: undefined;
  Profile: undefined;
};

const PublicTab = createBottomTabNavigator<RootPrivateTabParamsList>();

const PrivateNav = () => {
  return (
    <PublicTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = '';
          const iconColor = focused ? 'lightskyblue' : 'gray';
          switch (route.name) {
            case 'Profile': {
              iconName = 'user';
              break;
            }
            case 'Home': {
              iconName = 'home';
              break;
            }
          }
          return <AntDesign name={iconName} size={24} color={iconColor} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'lightskyblue',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: 'black',
          borderTopColor: 'transparent',
        },
      }}
    >
      <PublicTab.Screen name='Home' component={HomeScreen} />
      <PublicTab.Screen name='Profile' component={ProfileScreen} />
    </PublicTab.Navigator>
  );
};
export default PrivateNav;
