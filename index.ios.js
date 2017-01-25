// IOS Stuff

// Import LIbrary to help create Component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

//Create a Component
const App = () => (
      <Header headerText={'ALBUMS'} />
);

//Render it to the device
AppRegistry.registerComponent('reactNative', () => App);
