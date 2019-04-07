import React, { Component } from 'react'
import { Platform } from 'react-native'
import { createStackNavigator, createAppContainer, } from 'react-navigation'
// import { Provider } from 'react-redux'
// import store from './src/components/store.js'

import AccountDetails from './src/components/AccountDetails.js'
import CreateAccount from './src/components/CreateAccount.js'
import CreateAlert from './src/components/CreateAlert.js'
import ViewAlerts from './src/components/ViewAlerts.js'
import Login from './src/components/Login.js'
// import Post from './src/components/Post.js'
// import Postform from './src/components/Postform.js'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      // <Provider store={store}>
        <AppNavigator/>
      // </Provider>
    )
  }
}

const AppNavigator = createStackNavigator({
  viewAlerts: ViewAlerts,
  createAccount: CreateAccount,
  login: Login,
  createAlert: CreateAlert,
  
  accountDetails: AccountDetails,
  // postform: Postform,
  // post: Post,
})

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer


