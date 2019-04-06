import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import Heading from './Heading.js'
import { navigation } from 'react-navigation'

const symbol = "<"
// const lat =  Number(39.7392)
// const long =  Number(104.9903)

class CreateAlert extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: "",
      chosenMaxTemp: 90,
      chosenMinTemp: 90,
      maxTemp: 0,
      minTemp: 0,
      user_id: 0,
      type_id: 0,
      forecast: [],
    }
  }

  componentDidMount() {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${this.props.navigation.state.params.lat}&lon=-${this.props.navigation.state.params.long}&APPID=ab7c893ba66ab77f4354fb07e9abfd0e`, {
    method: "GET",
    "Content-Type": "application/json",
  })
  .then(response => response.json())
  .then(data => {
    this.setState({
      forecast: data
    })
    console.log("forecast", this.state.forecast)
  })
  .catch(error => {
    console.error(error)
  })
  }

  setTemp = (e) => this.setState({ chosenMinTemp: e })

  setMessage = (e) => this.setState({ message: e })

  viewState = () => {
    console.log(this.props.navigation.state.params.lat)
  }



  createAlert = async (e) => {
    e.preventDefault()
    const multiplier = Number(1.8)
    const kelvin = Number(this.state.forecast.list[0].main.temp_min)
    const subtract273 = Number(273)
    const add32 = Number(32)
    const convertedTemp = multiplier * (kelvin - subtract273) + add32
    console.log("convertedTemp", convertedTemp)
    console.log("kelvin", kelvin)
    await this.setState({
      minTemp: Number(convertedTemp)
    })
    console.log("minTemp", this.state.minTemp)
    const newAlert = {
      message: this.state.message,
      user_id: 2,
      type_id: 2
    }
    fetch('http://localhost:3000/alert/2', {
      method: 'POST',
      body: JSON.stringify(newAlert),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
  }


  render() {
    // const { navigation } = this.props;
    // const lat = this.props.navigation.state.params(this.state.lat, '50');
    // const long = this.props.navigation.state.params(this.state.long, '100');
    // console.log(lat)
    // console.log(long)

    return (
      <View style={styles.form}>
        <Heading>My Weather Buddy</Heading>

        <View style={styles.inputContainer}>

          <View style={styles.alertSetter}>
            <Text> Send Alert if Temp is </Text>
            <Text> {symbol} </Text>
            <TextInput
              style={styles.userInput}
              placeholder="40"
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
            onPress={(e) => { this.props.navigation.navigate('viewAlerts'); this.createAlert(e); }}
          />

          <View style={styles.marginTop}>
            <Button
              style={styles.viewAlertsButton}
              title="View Alerts"
              onPress={() => {
                this.props.navigation.navigate('viewAlerts'); this.viewState()
              }
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