import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.welcome}>Welcome! {this.props.username}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eceff1",
    flex: 1,
  },
  welcome: {
    flexGrow: 1,
    alignItems: "flex-start",
  }
});