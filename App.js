import React, { Component } from 'react'
import { Platform, StyleSheet, View, } from 'react-native'
import { createStackNavigator, createAppContainer, } from 'react-navigation'
import CreateAccount from './src/components/CreateAccount.js'
import Login from './src/components/Login.js'

class App extends Component {
  render() {
    return (
      <AppNavigator />
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

const AppNavigator = createStackNavigator({
  login: Login,
  createAccount: CreateAccount,
})

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer


