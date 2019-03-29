import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

class CreateAccount extends Component {
  
  render() {
    return (
      <View style={styles.form}>
        <TextInput
          style={styles.inputs}
          placeholder="Name"
          value="this will be state name"
          // onChangeText={this.placeNameChangedHandler}
        />
        <Button
          style={styles.createButton}
          title="Create Account"
          // onPress={this.placeSubmitHandler}
        />

        <Button
          title="Back to home"
          onPress={() =>
            this.props.navigation.navigate('Home')
          }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  form: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
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