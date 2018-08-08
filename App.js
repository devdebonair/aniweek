import React from 'react';
import store from './app/store';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

import Home from './app/screens/home';

export default class App extends React.Component {
  render() {
    return(
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}