import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import Heading from './Heading.js'
import { navigation } from 'react-navigation'

// const symbol = "<"
// const lat =  Number(39.7392)
// const long =  Number(104.9903)

const puce = '#513B41'

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
      min: '<',
      max: '>',
      flipper: false,
    }
  }

  static navigationOptions = {
    header: null,
  }

  // componentDidMount() {
  //   fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${this.props.navigation.state.params.lat}&lon=-${this.props.navigation.state.params.long}&APPID=ab7c893ba66ab77f4354fb07e9abfd0e`, {
  //     method: "GET",
  //     "Content-Type": "application/json",
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       this.setState({
  //         forecast: data
  //       })
  //       console.log("forecast", this.state.forecast)
  //     })
  //     .catch(error => {
  //       console.error(error)
  //     })
  // }

  setTemp = (e) => this.setState({ chosenMinTemp: e })

  setMessage = (e) => this.setState({ message: e })

  viewState = () => {
    console.log(this.props.navigation.state.params.lat)
  }

  flipSymbol = () => {
    this.setState({
      flipper: !this.state.flipper,
    })
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
    const maxormin = this.state.min ? 'min' : 'max'
    console.log("maxorMin", maxormin)
    await this.setState({
      minTemp: Number(convertedTemp)
    })
    console.log("minTemp", this.state.minTemp)
    const newAlert = {
      message: this.state.message,
      user_id: 1,
      type: maxormin,
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

    const flipped = this.state.flipper ? this.state.max : this.state.min

    return (
      <View style={styles.form}>
        <Heading>Create Alert</Heading>

        <View style={styles.inputContainer}>
          <View style={styles.center}>
            <Text style={styles.sizer}>  Send Alert  </Text>

            <View style={styles.alertSetter}>
              <Text style={styles.sizer} onPress={() => this.flipSymbol()}> if Temp is  <Text style={styles.maxormin}> {flipped}</Text>   </Text> 

              <TextInput
                style={styles.userInput}
                placeholder="40"
                value={this.state.chosenTemp}
                onChangeText={(e) => this.setTemp(e)}
              />
              <Text style={styles.sizer}> degrees </Text>
            </View>
          </View>

          <TextInput
            style={styles.alertMessage}
            placeholder="ie Wear Hat and Gloves"
            value={this.state.message}
            onChangeText={(e) => this.setMessage(e)}
          />
          <View style={styles.center}>
            <Text style={styles.sizer}>Enter Text Message to Receive</Text>
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
  maxormin: {
    fontSize: 22,
    color: '#F83839',
    margin: 4,
    fontWeight: 'bold',
  },
  alertSetter: {
    flexDirection: 'row',
  },
  sizer: {
    fontSize: 18,
    color: puce,
    margin: 4,
    fontWeight: 'bold',
  },
  center: {
    flexDirection: 'column',
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
    width: '80%'
  },
  userInput: {
    width: '10%',
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: '#eee',
    borderRadius: 2,
  },
  alertMessage: {
    width: '100%',
    borderWidth: 1,
    backgroundColor: 'white',
    height: 50,
    borderColor: '#eee',
    padding: 5,
    margin: 8,
    borderRadius: 11,
    borderColor: puce,
  },
  createAlertButton: {
    width: '30%',
    borderWidth: 1,
  },
  viewAlertsButton: {
    width: '30%',
    marginTop: 70,
    borderWidth: 1,
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