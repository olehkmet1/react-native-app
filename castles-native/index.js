/** @format */

import {AppRegistry} from 'react-native';
import { Provider } from 'react-redux';
import React from 'react';

import configureStore from './src/store/reducers';
const store = configureStore();

import {name as appName} from './app.json';

import RootNavigator from './src/navigation/RootNavigator';

const AppWithStore = () => (
    <Provider store = { store }>
        <RootNavigator />
    </Provider>
)

AppRegistry.registerComponent(appName, () => AppWithStore);
