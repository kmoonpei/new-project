
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers';
import { Provider, connect } from 'react-redux';
import TabNavigator from './app.router';
import { store } from './../store/redux.store';

const App = reduxifyNavigator(TabNavigator, 'root');
const mapStateToProps = (state) => ({
  state: state.nav,
});
const AppWithNavigationState = connect(mapStateToProps)(App);
export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}


