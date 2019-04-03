import React, { Component } from 'react'
import { Platform, StyleSheet, View, Button, TextInput } from 'react-native'
import Heading from './Heading.js'

class Postform extends Component {


  render() {
    return (
      <View style={styles.container}>
        <Heading> Postform </Heading>


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

        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('post')}
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
  inputContainer: {
    width: '70%'
  },
  inputs: {
    width: '100%',
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: '#eee',
    padding: 5,
    margin: 8,
  },
})

export default Postform