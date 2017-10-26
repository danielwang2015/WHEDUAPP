import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import SignIn from './SignIn';
import Home from './Home';
import { Root } from 'native-base';
const stackNavigatorRoutes = {
  SignIn: { screen: SignIn },
  Home: {screen: Home},
};

const stackNavigatorConfig = {
  headerMode: 'none',
  // mode: 'card',
  initialRouteName: 'SignIn',
};

const AppNavigator = StackNavigator(
  stackNavigatorRoutes,
  stackNavigatorConfig,
);

const AppRoot = () => (
  <Root>
    <AppNavigator />
  </Root>
);

AppNavigator.displayName = 'AppNavigator';

export default AppRoot;