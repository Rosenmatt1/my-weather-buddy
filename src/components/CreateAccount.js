import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import Heading from './Heading.js'

const puce = '#513B41'

class CreateAccount extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      phone: '',
      email: '',
      hashed_password: '',
      lat: 39.7392,
      long: 104.9903,
      location: []
    }
  }

  static navigationOptions = {
    header: null,
  }

  // componentDidMount() {
  //   let geoOptions = {
  //     enableHighAccuracy: true,
  //     timeOut: 20000,
  //     maximumAge: 60 * 60 * 24
  //   }
  //   window.navigator.geolocation.getCurrentPosition(position => {
  //     console.log("position", position)
  //     this.setState({
  //       // lat: position.coords.latitude
  //       location: position.coords.latitude
  //     }),
  //       err => this.setState({
  //         errorMessage: err.message
  //       }), geoOptions
  //   })
  // }

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
  //   console.log("e", e)
  //   window.navigator.geolocation.getCurrentPosition(position => { 
  //   console.log("position", position)
  //     this.setState({
  //     // lat: position.coords.latitude
  //     location: position.coords.latitude
  //   }),
  //     err => this.setState({
  //       errorMessage: err.message
  //     })
  //   })
  //   console.log("location", this.state.location)
  // }

  // getLocation = async (toGoogleAddress) => {
  //   await fetch(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json?address=${toGoogleAddress}&key=AIzaSyBixPOjrGSjxpkw-pszxd_iUvQdbMBTXxg`, {
  //     method: "GET", "Content-Type": "application/json",
  //   })
  //     .then(response => response.json())
  //     .then(data => { this.setState({ location: data.results[0].geometry.location }) })
  // }

  // const toAddress = e.target[1].value
  // Promise.all([this.fromAddressGoogle(fromAddress), this.toAddressGoogle(toAddress)])


  // pickUpAddress = async (e) => {
  //   this.setState({ puAddress: e.target.value })
  //   await fetch(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${e.target.value}&key=AIzaSyBixPOjrGSjxpkw-pszxd_iUvQdbMBTXxg&sessiontoken=${localStorage.lyftjwt}`, {
  //     method: "GET",
  //     "Content-Type": "application/json",
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       this.setState({
  //         autocompletePu: data
  //       })
  //     })
  //     .catch(error => {
  //       console.error(error)
  //     })
  // }

  // <input id="autocomplete" onChange={props.pickUpAddress} type="address" className="form-control border-dark" placeholder="Enter Pick Up Location" value={props.puAddress} />


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
          <Image style={styles.icon} source={require('./assets/umbrella.png')} />
          <Image style={styles.icon} source={require('./assets/snowflake.png')} />
          <Image style={styles.icon} source={require('./assets/snowflakepuce.png')} />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Name"
            name="name"
            value={this.state.name}
            onChangeText={(e) => this.setName(e)}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Email"
            name="email"
            value={this.state.email}
            onChangeText={(e) => this.setEmail(e)}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Phone"
            name="phone"
            value={this.state.phone}
            onChangeText={(e) => this.setPhone(e)}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            name="hashed_password"
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
              onPress={() => { this.props.navigation.navigate('createAlert', { lat: this.state.lat, long: this.state.long, email: this.state.email }); }}
            />
          </View>
        </TouchableOpacity>

        <View style={styles.rower}>
          <Text style={styles.login}
            onPress={() =>
              this.props.navigation.navigate('login')
            }> Already have an account?  Login </Text>
        </View>

        {/* onPress={(e) => { func1(); func2(); }} */}

        {/* <Text style={styles.miniText}>**The location for your alerts will be set to your current location at the time of making the account. Please accept the GeoCoordinates request.**</Text> */}

      </View>
    )
  }
}

const styles = StyleSheet.create({
  rower: {
    flexDirection: 'row'
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
  rower: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 40,
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
  }
})

export default CreateAccount