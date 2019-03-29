import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

class CreateAccount extends Component {
  
  render() {
    return (
      <View style={styles.form}>

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

        <Button
          style={styles.createButton}
          title="Already have an account? Login"
          onPress={() =>
            this.props.navigation.navigate('login')
          }
        />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  form: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center"
  },
  inputs: {
    width: "70%"
  },
  createButton: {
    width: "30%"
  },
})

export default CreateAccount