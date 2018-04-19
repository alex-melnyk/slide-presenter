import React, {Component} from 'react';
import {StatusBar, View} from 'react-native';
import {Provider} from 'react-redux';

import Store from './src/store';

import MainContainer from "./src/container/MainContainer";
import {Colors} from "./src/utils/colors";

export default class App extends Component {
    render() {
        return (
            <Provider store={Store}>
                <View style={{
                    flex: 1,
                    backgroundColor: Colors.white
                }}>
                    <StatusBar barStyle="light-content" />
                    <MainContainer/>
                </View>
            </Provider>
        );
    }
}