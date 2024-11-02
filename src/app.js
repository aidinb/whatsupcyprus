/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';
import {TabNavigator, StackNavigator,DrawerNavigator} from 'react-navigation';
import Home from './screens/Home';
import About from './screens/About';




const Tab = TabNavigator({
        Home: {
            screen: Home,
        },
        About: {
            screen: About,

        },
    }, {
        tabBarOptions: {
            activeTintColor: '#0089AE',
            showIcon: true,
            showLabel: true,
            inactiveTintColor:'grey',
            style: {
                backgroundColor: 'white', shadowColor: 'rgba(0,0,0,0.5)',
                shadowOffset: {width: -2, height: 1},
                shadowOpacity: 0.7,
            },

            tabStyle: {},
            labelStyle:{textShadowColor: 'rgba(0,0,0,0.2)',
                textShadowOffset: {width: -1, height: 1},
                textShadowRadius: 3,}
        },
        tabBarPosition: 'bottom'
    },
);

class App extends Component {

    render() {

        return <Tab/>
    }
}


AppRegistry.registerComponent('whatsupcyprus', () => App);
