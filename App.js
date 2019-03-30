import React, { Component } from 'react'
import { Platform, StyleSheet, View, } from 'react-native'
import { createStackNavigator, createAppContainer, } from 'react-navigation'
import AccountDetails from './src/components/AccountDetails.js'
import CreateAccount from './src/components/CreateAccount.js'
import CreateAlert from './src/components/CreateAlert.js'
import ViewAlerts from './src/components/ViewAlerts.js'
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
  createAlert: CreateAlert,
  viewAlerts: ViewAlerts,
  accountDetails: AccountDetails,
})

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer


