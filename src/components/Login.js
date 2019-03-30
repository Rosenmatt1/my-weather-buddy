import React, { Component } from 'react'
import { Platform, StyleSheet, View, Button, Text } from 'react-native'

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Login</Text>
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('createAccount')}
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
})

export default Login