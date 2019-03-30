import React, { Component } from 'react'
import { Platform, StyleSheet, View, } from 'react-native'
import { createStackNavigator, createAppContainer, } from 'react-navigation'
import CreateAccount from './src/components/CreateAccount.js'
import Login from './src/components/Login.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: null,
      long: null,
    }
  }


  render() {
    return (
      <AppNavigator 
        // screenProps={{
        //   currentFriends: this.state.currentFriends,
        //   possibleFriends: this.state.possibleFriends,
        //   addFriend: this.addFriend,
        // }}
      />
    )
  }
}

const AppNavigator = createStackNavigator({
  createAccount: CreateAccount,
  login: Login,
})

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer


