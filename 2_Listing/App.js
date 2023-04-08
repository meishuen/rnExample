import React from 'react';
import { StyleSheet } from 'react-native';

import RootNavigator from './src/navigator/RootNavigator';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import moviesReducer from './src/store/reducer/moviesReducer';

const rootReducer = combineReducers({
  moviesReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
