import React, { Component } from 'react'
import { Platform, StyleSheet, View, Button, Text } from 'react-native'
import { createStackNavigator, createAppContainer, } from 'react-navigation'
// import CreateAccount from './src/components/CreateAccount.js'
// import AppNavigator from './src/components/AppNavigator.js';



class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is App</Text>
        <Button
          title="Go to App"
          onPress={() => this.props.navigation.navigate('test')}
        />
      </View>
    )
  }
}

class Test extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is Test</Text>
        <Button
          title="Go to Test"
          onPress={() =>
            this.props.navigation.navigate('home')
          }
        />
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

const AppNavigator = createStackNavigator({
  home: App,
  test: Test,
})

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer


