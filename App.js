import React, { Component } from 'react'
import { Platform, StyleSheet, View, } from 'react-native'
import CreateAccount from './src/components/CreateAccount.js'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
    
          <CreateAccount />
         
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
