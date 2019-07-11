import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createDrawerNavigator, createStackNavigator, createAppContainer} from 'react-navigation';

import Login from './pages/Login';
import SignUp from './pages/SignUp';

const MainNavigator = createStackNavigator({
  Login: {screen: Login},
  SignUp: {screen: SignUp},
});

export default MainNavigator;