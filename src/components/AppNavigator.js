import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from './Home.js'
import CreateAccount from './CreateAccount.js'

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  CreateAccount: { screen: CreateAccount },
})

export default AppNavigator