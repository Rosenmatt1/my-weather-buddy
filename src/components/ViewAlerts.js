import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import Heading from './Heading.js'

class ViewAlert extends Component {

  render() {
    return (
      <View style={styles.form}>
        <Heading>Current Alerts</Heading>

        <View style={styles.inputContainer}>
          <Text>Alert 1</Text>
          <TextInput
            style={styles.inputs}
            placeholder="Temp"
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
          style={styles.createAlert}
          title="Create New Alert"
          onPress={() =>
            this.props.navigation.navigate('createAlert')
          }
        //  onPress={(e) => { func1(); func2(); }}>
        />

        <Button
          style={styles.createAlert}
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
  delete: {
    width: '50%'
  },
  
})

export default ViewAlert