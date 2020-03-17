import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './Home';
import Profile from './Profile';

const App = () => {
  const materialTab = createMaterialBottomTabNavigator();
  return (
    <NavigationContainer>
      <materialTab.Navigator activeColor="#e91e63">
        <materialTab.Screen
          name="Home Screen"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: () => <MaterialCommunityIcons name="home" />,
          }}
        />
        <materialTab.Screen name="Profile Screen" component={Profile} />
      </materialTab.Navigator>
    </NavigationContainer>
  );
};

module.exports = App;
