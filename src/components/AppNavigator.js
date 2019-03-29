import { createStackNavigator } from 'react-navigation';
import Home from './Home';
import CreateAccount from './CreateAccount.js';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  CreateAccount: { screen: CreateAccount },
});

export default AppNavigator;