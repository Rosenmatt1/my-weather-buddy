import React, { Component } from 'react'
import { Platform } from 'react-native'
import { createStackNavigator, createAppContainer, } from 'react-navigation'
import AccountDetails from './src/components/AccountDetails.js'
import CreateAccount from './src/components/CreateAccount.js'
import CreateAlert from './src/components/CreateAlert.js'
import ViewAlerts from './src/components/ViewAlerts.js'
import Login from './src/components/Login.js'
import Post from './src/components/Post.js'
import Postform from './src/components/Postform.js'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <AppNavigator/>
    )
  }
}

const AppNavigator = createStackNavigator({
  postform: Postform,
  post: Post,
  createAccount: CreateAccount,
  login: Login,
  createAlert: CreateAlert,
  viewAlerts: ViewAlerts,
  accountDetails: AccountDetails,
})

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer


