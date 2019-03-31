import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import Heading from './Heading.js'

class ViewAlert extends Component {

  render() {
    return (
      <View style={styles.form}>
        <Heading>Current Alerts</Heading>

        <Text style={styles.miniText}> **Alerts are sent at 7pm the night before the weather condition will be met** </Text>

        <View style={styles.inputContainer}>
          <Text>Alert 1</Text>
          <TextInput
            style={styles.inputs}
            placeholder="Temp"
            keyboardType="numeric"
          // value="this will be the temp"
          // onChangeText={this.placeNameChangedHandler}
          />

          <Button
            style={styles.delete}
            title="Delete"
            onPress={() =>
              this.props.navigation.navigate('viewAlerts')
            }
          //  onPress={(e) => { func1(); func2(); }}>
          />
          <Button
            style={styles.update}
            title="Edit"
            onPress={() =>
              this.props.navigation.navigate('viewAlerts')
            }
          //  onPress={(e) => { func1(); func2(); }}>
          />
        </View>


        <Button
          style={styles.buttons}
          title="Create New Alert"
          onPress={() =>
            this.props.navigation.navigate('createAlert')
          }
        //  onPress={(e) => { func1(); func2(); }}>
        />

        <Button
          style={styles.buttons}
          title="Account Details"
          onPress={() =>
            this.props.navigation.navigate('accountDetails')
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
  update: {
    width: '30%'
  },
  delete: {
    width: '30%'
  },
  buttons: {
    width: '50%'
  },
  miniText: {
    width: '70%',
    fontWeight: '100',
  },

})

export default ViewAlert