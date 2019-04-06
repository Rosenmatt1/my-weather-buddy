import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import Heading from './Heading.js'
import { navigation } from 'react-navigation'

const symbol = "<"
const lat = 35
const long = 105

class CreateAlert extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: "",
      maxTemp: 90,
      minTemp: 0,
      user_id: 0,
      type_id: 0,
      forecast: [],
    }
  }

  // componentDidMount() {
  //   console.log(this.state)
  // }

  // Converting kelvin to Farenheit:
  // F = 1.8(K - 273) + 32

  setTemp = (e) => this.setState({ maxTemp: e })

  setMessage = (e) => this.setState({ message: e })

  viewState = () => {
    console.log(this.props.lat)
    console.log(this.props.long)
  }

  getForecast = async (e) => {
    await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&APPID=ab7c893ba66ab77f4354fb07e9abfd0e`, {
      method: "GET",
      "Content-Type": "application/json",
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          forecast: data
        })
      })
      .catch(error => {
        console.error(error)
      })
  }



  // createAlert = async (e) => {
  //   e.preventDefault()
  //   const newAlert = {
  //     message: this.state.message,
  //     user_id: 2,
  //     type_id: 2
  //   }
  //   await fetch('http://localhost:3000/alert/2', {
  //     method: 'POST',
  //     body: JSON.stringify(newAlert),
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //     }
  //   })
  // }

  


  render() {
    const { navigation } = this.props;
    const lat = navigation.getParam('lat', '50');
    const long = navigation.getParam('long', '100');


    return (
      <View style={styles.form}>
        <Heading>My Weather Buddy</Heading>

        <View style={styles.inputContainer}>

          <View style={styles.alertSetter}>
            <Text> Send Alert if Temp is </Text>
            <Text> {symbol} </Text>
            <TextInput
              style={styles.userInput}
              placeholder="90"
              value={this.state.chosenTemp}
              onChangeText={(e) => this.setTemp(e)}
            />
            <Text> degrees </Text>
          </View>

          <TextInput
            style={styles.alertMessage}
            placeholder="ie Wear Shorts and Sandals"
            value={this.state.message}
            onChangeText={(e) => this.setMessage(e)}
          />
          <View style={styles.center}>
            <Text style={styles.miniText}>Enter Text Message to Receive</Text>
          </View>

          <Button
            style={styles.createAlertButton}
            title="Set Alert"
            onPress={() => { this.props.navigation.navigate('viewAlerts'); this.viewState(); }}
          />

          <View style={styles.marginTop}>
            <Button
              style={styles.viewAlertsButton}
              title="View Alerts"
              onPress={() =>
                this.props.navigation.navigate('viewAlerts')
              }
            />
          </View>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  alertSetter: {
    flexDirection: 'row',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
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
    width: '30%',
    marginTop: 70,
  },
  marginTop: {
    marginTop: 70,
  },
  miniText: {
    width: '80%',
    fontWeight: '100',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default CreateAlert