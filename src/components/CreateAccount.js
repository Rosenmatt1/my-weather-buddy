import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";

class CreateAccount extends Component {
  
  render() {
    return (
      <View style={styles.form}>
        <Text>My Weather Buddy</Text>
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
          title="Create Account"
        />

        <Button
          style={styles.login}
          title="Already have an account? Login"
          onPress={() =>
            this.props.navigation.navigate('login')
          }
        //  onPress={(e) => { func1(); func2(); }}>
        />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: '#C8F4F9',
  },
  inputs: {
    width: "70%"
  },
  login: {
    width: "30%"
  },
})

export default CreateAccount