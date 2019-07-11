

import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

/*
const SettingsScreen = () => {
    return (
        <View style={{flex: 1}}>
        <Text>This is Settings Screen</Text>
    </View>
);
};
*/

class SettingsScreen extends React.Component {
    static navigationOptions = {
        title: 'ProfileScreen Title',
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
            <Button
        title="Go to Jane's profile"
        onPress={() => navigate('Profile', {name: 'Jhonny'})}
    />
    );
    }
}
export default SettingsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});