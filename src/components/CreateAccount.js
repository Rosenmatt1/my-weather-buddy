import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import Heading from './Heading.js'

const puce = '#513B41'

const url = 'https://myweatherbuddy.herokuapp.com/'

class CreateAccount extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      phone: '',
      email: '',
      hashed_password: '',
      lat: 0,
      long: 0,
    }
  }

  static navigationOptions = {
    header: null,
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(position => {
      console.log("position", position)
      this.setState({
        lat: position.coords.latitude,
        long: position.coords.longitude,
      }),
      console.log("lat", this.state.lat)
      console.log("lat", this.state.long)
      err => this.setState({
        errorMessage: err.message
      })
    })
  }

  setName = (e) => {
    this.setState({
      name: e
    })
  }

  setEmail = (e) => {
    this.setState({
      email: e
    })
  }

  setPhone = (e) => {
    this.setState({
      phone: e
    })
  }

  setPassword = (e) => {
    this.setState({
      hashed_password: e
    })
  }

  // getLocation = (e) => {
  //   window.navigator.geolocation.getCurrentPosition(position => { 
  //   console.log("position", position)
  //     this.setState({
  //     lat: position.coords.latitude,
  //     long: position.coords.longitude,
  //   }),
  //     console.log("lat", this.state.lat)
  //     console.log("lat", this.state.long)
  //     err => this.setState({
  //       errorMessage: err.message
  //     })
  //   })
  // }

  postUser = () => {
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      hashed_password: this.state.hashed_password,
      lat: this.state.lat,
      long: this.state.long
    }
    fetch('http://localhost:3000/create/', {
      method: 'POST',
      body: JSON.stringify(newUser),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
  }


  render() {
    return (
      <View style={styles.form}>
        <Heading >MyWeather Buddy</Heading>

        <View style={styles.rower}>
          <Image style={styles.icon} source={require('./assets/wind.png')} />
          <Image style={styles.icon} source={require('./assets/sunny.png')} />
          <Image style={styles.snow} source={require('./assets/snowflake.png')} />
          <Image style={styles.icon} source={require('./assets/umbrella.png')} />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Name"
            name="name"
            type="name"
            value={this.state.name}
            onChangeText={(e) => this.setName(e)}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Email"
            name="email"
            type="email"
            value={this.state.email}
            onChangeText={(e) => this.setEmail(e)}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Phone"
            name="phone"
            type="phone"
            value={this.state.phone}
            onChangeText={(e) => this.setPhone(e)}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            name="password"
            type="password"
            value={this.state.hashed_password}
            onChangeText={(e) => this.setPassword(e)}
          />
        </View>

        <TouchableOpacity>
          <View style={styles.createButton}>
            <Button
              title="Create Account"
              color="#FFFFFF"
              style={styles.create}
              onPress={() => { this.props.navigation.navigate('createAlert', { lat: this.state.lat, long: this.state.long }); this.postUser();  }}
            />
          </View>
        </TouchableOpacity>

        {/* this.getLocation(); */}

        <View style={styles.rower2}>
          <Text style={styles.login}
            onPress={() => { this.props.navigation.navigate('login', { lat: this.state.lat, long: this.state.long}) }}> Already have an account?  Login </Text>
        </View>

        {/* onPress={(e) => { func1(); func2(); }} */}

        {/* <Text style={styles.miniText}>**The location for your alerts will be set to your current location at the time of making the account. Please accept the GeoCoordinates request.**</Text> */}

      </View>
    )
  }
}

const styles = StyleSheet.create({
  rower: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rower2: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 40,
  },
  form: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: '#C8F4F9',
  },
  inputContainer: {
    width: '70%',
    marginTop: 20,
  },
  inputs: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: '#eee',
    padding: 5,
    margin: 8,
    color: puce,
  },
  createButton: {
    marginTop: 25,
    marginLeft: 20,
    backgroundColor: puce,
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25
  },
  create: {
    width: '30%',
  },
  login: {
    width: '70%',
    color: 'blue'
  },
  // miniText: {
  //   width: '70%',
  //   marginTop: 40,
  //   fontWeight: '100',
  // },
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

export default CreateAccount