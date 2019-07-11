


import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createDrawerNavigator, createStackNavigator, createAppContainer} from 'react-navigation';

import AppNavigator from "./screens/AppNavigator";
import DrawerNavigatorExample from "./screens/DrawerNavigatorExample";

const AppContainer = createAppContainer(DrawerNavigatorExample);
// without the style you will see a blank screen
export default ()=><View style={{flex: 1}}><AppContainer/></View>;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
