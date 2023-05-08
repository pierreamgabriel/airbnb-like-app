import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import Router from './src/navigation/Router';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router />
    </>
  );
};

export default App;
