import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import Heading from './Heading.js'

class CreateAlert extends Component {

  render() {
    return (
      <View style={styles.form}>
        <Heading>My Weather Buddy</Heading>

        <View style={styles.inputContainer}>

          <View style={styles.alertSetter}>
            <Text> Send Alert if Temp is </Text>
            <Text> > </Text>
            <TextInput
              style={styles.userInput}
              placeholder="Temp"
            // value="this will be the temp"
            // onChangeText={this.placeNameChangedHandler}
            />
            <Text> degrees </Text>
          </View>

          <TextInput
            style={styles.alertMessage}
            placeholder="ie Wear Shorts and Sandals"
          // value="this will be the alert message"
          // onChangeText={this.placeNameChangedHandler}
          />
          <Text style={styles.miniText}>Enter Text Message to be Sent</Text>

          <Button
            style={styles.createAlertButton}
            title="Create Alert"
            onPress={() =>
              this.props.navigation.navigate('viewAlerts')
            }
          //  onPress={(e) => { func1(); func2(); }}>
          />

          <Button
            style={styles.viewAlertsButton}
            title="View Alerts"
            onPress={() =>
              this.props.navigation.navigate('viewAlerts')
            }
          //  onPress={(e) => { func1(); func2(); }}>
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  alertSetter: {
    flexDirection: 'row',
  },
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
  userInput: {
    width: '10%',
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: '#eee',
    padding: 5,
    margin: 8,
  },
  alertMessage: {
    width: '100%',
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: '#eee',
    padding: 5,
    margin: 8,
  },
  createAlertButton: {
    width: '30%'
  },
  viewAlertsButton: {
    width: '30%'
  },
  miniText: {
    width: '70%',
    fontWeight: '100',
  },
})

export default CreateAlert