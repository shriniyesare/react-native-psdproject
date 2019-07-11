/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  Button,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Routes from './src/Routes';

const App = () => {
  return (
    // <Fragment>
    //   <SafeAreaView>
    //     <ScrollView
    //       contentInsetAdjustmentBehavior="automatic"
    //       style={styles.scrollView}>

          <View style={styles.container}>
            <StatusBar backgroundColor="blue" barStyle="light-content" />
            <View style={{ flex:1 }}><Routes/></View>
          </View>
    //     </ScrollView>
    //   </SafeAreaView>
    // </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eceff1",
    flex: 1,
  }
});

export default App;