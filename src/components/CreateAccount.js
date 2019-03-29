import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet,  } from "react-native";


class CreateAccount extends Component {
  

  render() {
    return (
      <View style={styles.form}>
        <TextInput
          placeholder="Name"
          // value={this.state.placeName}
          // onChangeText={this.placeNameChangedHandler}
          style={styles.inputs}
        />
        {/* <TouchableOpacity>
          <Icon size={30} name="ios-airplane" color="red" />
        </TouchableOpacity> */}
        <Button
          title="Create Account"
          // style={styles.placeButton}
          // onPress={this.placeSubmitHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    // flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  inputs: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  }
})

export default CreateAccount