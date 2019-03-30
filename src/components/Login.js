import React, { Component } from 'react'
import { Platform, StyleSheet, View, Button, Text } from 'react-native'
import Heading from './Heading.js'

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Heading> Login </Heading>
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('createAlert')}
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