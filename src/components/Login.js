import React, { Component } from 'react'
import { Platform, StyleSheet, View, Button, TextInput, Image } from 'react-native'
import Heading from './Heading.js'

const puce = '#513B41'

class Login extends Component {

  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <View style={styles.container}>
        <Heading> MyWeather Buddy </Heading>

        <View style={styles.rower}>
          <Image style={styles.icon} source={require('./assets/wind.png')} />
          <Image style={styles.icon} source={require('./assets/sunny.png')} />
          <Image style={styles.snow} source={require('./assets/snowflake.png')} />
          <Image style={styles.icon} source={require('./assets/umbrella.png')} />
        </View>

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
  rower: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C8F4F9',
  },
  inputContainer: {
    width: '70%',
    marginTop: 20,
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
  icon: {
    height: 40,
    width: 40,
    margin: 10,
  },
  snow: {
    height: 37,
    width: 37,
    margin: 10,
  }
})

export default Login