import React, { Component } from 'react'
import { Platform, StyleSheet, View, Button, TextInput } from 'react-native'

const puce = '#513B41'

class ChangeEmail extends Component {

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Old Email"
          // value="this will be the temp"
          // onChangeText={this.placeNameChangedHandler}
          />
          <TextInput
            style={styles.inputs}
            placeholder="New Email"
          // value="this will be the temp"
          // onChangeText={this.placeNameChangedHandler}
          />
        </View>

        <View style={styles.loginButton}>
          <Button
            title="Change"
            color="white"
            onPress={() => this.props.navigation.navigate('createAlert')}
          />
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#C8F4F9',
  // },
  inputContainer: {
    width: '70%',
    marginTop: 40,
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
    marginTop: 5,
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

export default ChangeEmail