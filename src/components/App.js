import React, { Component } from 'react'
import { Platform, StyleSheet, View, } from 'react-native'
// import CreateAccount from './CreateAccount.js'

import AppNavigator from './AppNavigator';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
    
        {/* <CreateAccount /> */}

        <AppNavigator />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C8F4F9',
  },
  // title: {
  //   fontSize: 20,
  //   textAlign: 'center',
  //   alignContent: 'flex-start',
  //   margin: 10,
  // },

})

export default App
