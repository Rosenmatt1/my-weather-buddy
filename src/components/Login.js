import React, { Component } from 'react'
import { Platform, StyleSheet, View, Button, TextInput } from 'react-native'
import Heading from './Heading.js'

const puce = '#513B41'

class Login extends Component {

  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <View style={styles.container}>
        <Heading> My Weather Buddy </Heading>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Email"
          // value="this will be the temp"
          // onChangeText={this.placeNameChangedHandler}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Password"
          // value="this will be the temp"
          // onChangeText={this.placeNameChangedHandler}
          />
        </View>

        <View style={styles.loginButton}>
          <Button
            title="Login"
            color="white"
            onPress={() => this.props.navigation.navigate('createAlert')}
          />
        </View>

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
  inputContainer: {
    width: '70%'
  },
  inputs: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: '#eee',
    padding: 5,
    margin: 8,
    color: puce,
  },
  loginButton: {
    marginTop: 25,
    backgroundColor: puce,
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25
  },
})

export default Login