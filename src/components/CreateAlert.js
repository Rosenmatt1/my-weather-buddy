import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet, Text, Image } from "react-native";
import Heading from './Heading.js'

const puce = '#513B41'

class CreateAlert extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: "",
      chosenTemp: 0,
      weatherTemp: 0,
      user_id: 0,
      type: '',
      forecast: [],
      min: '<',
      max: '>',
      flipper: false,
      placeholder: true,
    }
  }

  static navigationOptions = {
    header: null,
  }

  componentDidMount() {
    console.log("2ndPageLat", this.props.navigation.state.params.lat)
    console.log("2ndPageLong", this.props.navigation.state.params.long)
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

  getUserId = () => {
    fetch(``, {
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

  setTemp = (e) => this.setState({ chosenTemp: e })

  setMessage = (e) => this.setState({ message: e })

  viewState = () => {
    // console.log(this.props.navigation.state.params.lat)
    console.log("hello")
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
    const maxormin = this.state.flipper ? 'max' : 'min'
    console.log("maxorMin", maxormin)
    await this.setState({
      weatherTemp: Number(convertedTemp)
    })
    const newAlert = {
      message: this.state.message,
      user_id: 1,
      type: maxormin,
      chosenTemp: this.state.chosenTemp,
      weatherTemp: this.state.weatherTemp,
    }
    fetch(`http://localhost:3000/alert/`, {
      method: 'POST',
      body: JSON.stringify(newAlert),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    this.setState({
      placeholder: false,
    })
  }


  render() {
    const flipped = this.state.flipper ? this.state.max : this.state.min
    return (
      <View style={styles.form}>
        <Heading style={styles.header}>Create Alert</Heading>

        <View style={styles.rower}>
          <Image style={styles.icon} source={require('./assets/wind.png')} />
          <Image style={styles.icon} source={require('./assets/sunny.png')} />
          <Image style={styles.snow} source={require('./assets/snowflake.png')} />
          <Image style={styles.icon} source={require('./assets/umbrella.png')} />
        </View>


        <View style={styles.inputContainer}>
          <View style={styles.center}>
            <Text style={styles.sizer}>  Send Alert  </Text>

            <View style={styles.alertSetter}>
              <Text style={styles.sizer} onPress={() => this.flipSymbol()}> if Temp is   <Text style={styles.maxormin}> {flipped}</Text>   </Text>

              <TextInput
                style={styles.userInput}
                placeholder={this.state.placeholder ? "40" : ""}
                // value={this.state.chosenTemp}
                onChangeText={(e) => this.setTemp(e)}
              />
              <Text style={styles.sizer}> degrees </Text>
            </View>
          </View>

          <TextInput
            style={styles.alertMessage}
            placeholder="ie Wear Hat and Gloves"
            // value={this.state.message}
            onChangeText={(e) => this.setMessage(e)}
          />
          <View style={styles.center}>
            <Text style={styles.sizer}>Enter Text Message to Receive</Text>
          </View>
        </View>

          <View style={styles.createButton}>
            <Button
              style={styles.createAlertButton}
              title="Set Alert"
              color="#FFFFFF"
            onPress={(e) => { this.props.navigation.navigate('viewAlerts', { lat: this.state.lat, long: this.state.long }); this.createAlert(e); }}
            />
          </View>

        <View style={styles.marginTop}>
          <Button
            style={styles.viewAlertsButton}
            title="View Alerts"
            onPress={() => {
              this.props.navigation.navigate('viewAlerts', { lat: this.state.lat, long: this.state.long }); this.viewState() }}
          />
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 0
  },
  rower: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 40
  },
  maxormin: {
    fontSize: 22,
    color: '#0071FF',
    margin: 4,
    fontWeight: 'bold',
  },
  alertSetter: {
    flexDirection: 'row',
  },
  sizer: {
    fontSize: 20,
    color: puce,
    margin: 5,
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
    width: '80%',
    marginTop: 35,
  },
  userInput: {
    borderWidth: 1,
    width: 25,
    backgroundColor: 'white',
    borderColor: '#eee',
    height: 25,
    borderRadius: 2,
    marginTop: 5,
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
  viewAlertsButton: {
    width: '30%',
    borderWidth: 1,
  },
  marginTop: {
    marginTop: 80,
  },
  createAlertButton: {
    width: '40%',
    borderWidth: 1,
    flexDirection: 'row',
    marginLeft: '50%',
    marginRight: '50%',
  },
  createButton: {
    marginTop: 15,
    backgroundColor: puce,
    borderRadius: 10,
    width: '40%',
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
  },
  icon: {
    height: 40,
    width: 40,
    margin: 10,
  },
  snow: {
    height: 37,
    width: 37,
    margin: 10,
  }
})

export default CreateAlert