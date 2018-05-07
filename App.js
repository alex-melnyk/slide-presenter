import React, {Component} from 'react';
import {ActivityIndicator, StatusBar, View} from 'react-native';
import {Provider} from 'react-redux';

import Store from './src/store';

import MainContainer from "./src/container/MainContainer";
import {Colors} from "./src/utils/colors";

import * as SettingsActions from "./src/store/actions/settingsActions";

export default class App extends Component {
    state = {
        settingsLoaded: false
    };

    componentDidMount() {
        Store.dispatch(SettingsActions.loadLocaleLanguage());

        const unsubscribe = Store.subscribe(() => {
            if (Store.getState().settings.loaded) {
                unsubscribe();

                this.setState({settingsLoaded: true});
            }
        });
    }

    render() {
        if (!this.state.settingsLoaded) {
            return (
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <ActivityIndicator
                        size="large"
                    />
                </View>
            );
        }


        return (
            <Provider store={Store}>
                <View style={{
                    flex: 1,
                    backgroundColor: Colors.white
                }}>
                    <StatusBar barStyle="light-content"/>
                    <MainContainer/>
                </View>
            </Provider>
        );
    }
}