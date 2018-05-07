import React, {Component} from 'react';
import {ActivityIndicator, StatusBar, View} from 'react-native';
import {Provider} from 'react-redux';

import Store from './src/store';

import MainContainer from "./src/container/MainContainer";
import {Colors} from "./src/utils/colors";
import * as AppActions from "./src/store/actions/appActions";

export default class App extends Component {
    state = {
        settingsLoaded: false
    };

    componentDidMount() {
        Store.dispatch(AppActions.loadLocaleLanguage());

        const unsubscribe = Store.subscribe(() => {
            if (Store.getState().app.settingsLoaded) {
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