import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import Heading from './Heading.js'

class CreateAlert extends Component {

  render() {
    return (
      <View style={styles.form}>
        <Heading >My Weather Buddy</Heading>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Name"
          // value="this will be state name"
          // onChangeText={this.placeNameChangedHandler}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Email"
          // value="this will be state email"
          // onChangeText={this.placeNameChangedHandler}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Phone"
          // value="this will be state phone"
          // onChangeText={this.placeNameChangedHandler}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Password"
          // value="this will be state password"
          // onChangeText={this.placeNameChangedHandler}
          />
        </View>
       

        <Button
          style={styles.viewAlertsButton}
          title="Already have an account? Login"
          onPress={() =>
            this.props.navigation.navigate('login')
          }
        //  onPress={(e) => { func1(); func2(); }}>
        />
      </View>
      // </View>
    )
  }
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: '#C8F4F9',
  },
  inputContainer: {
    width: '70%'
  },
  inputs: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#eee',
    padding: 5,
    margin: 8,
  },
  viewAlertsButton: {
    width: '30%'
  },
})

export default CreateAlert