import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet, Text, Image } from "react-native";
// import FontAwesome, { Icons, parseIconName } from 'react-native-fontawesome';
import Heading from './Heading.js'
import SvgComponent from './assets/snowflake-solid.svg'

// const chev = parseIconFromClassName('fas fa-chevron-left')
// const snowflake = parseIconFromClassName('fas fa-chevron-left')




class CreateAccount extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      phone: '303-555-7777',
      email: '',
      hashed_password: '3r8&653%1',
      lat: 39,
      long: 105,
      location: []
    }
    this.setName = this.setName.bind(this)
    this.setEmail = this.setEmail.bind(this)
    this.setPhone = this.setPhone.bind(this)
    this.setPassword = this.setPassword.bind(this)
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(position => this.setState({
      // lat: position.coords.latitude
      location: position.coords.latitude
    }),
      err => this.setState({
        errorMessage: err.message
      })
    )
    console.log(this.state.location)
  }

  setName = (e) => {
    this.setState({
      name: e.target
    })
    console.log(this.state.name)
  }

  setEmail = (e) => {
    this.setState({
      email: e.target
    })
    console.log(this.state.email)
  }

  setPhone = (e) => {
    this.setState({
      phone: e.target
    })
    console.log(this.state.phone)
  }

  setPassword = (e) => {
    this.setState({
      hashed_password: e.target
    })
    console.log(this.state.hashed_password)
  }

  createUser = (e) => {
    // this.setState({
    //   name: e.nativeEventtarget[0].value,
    //   email: e.target[1],
    //   phone: e.target[2],
    //   hashed_password: e.target[3]
    // })
    console.log(this.state.name)
    console.log(this.state.email)
    console.log(this.state.phone)
    console.log(this.state.hashed_password)
    // this.postUser()
  }

  // getLocation = () => {
  //   console.log(this.state.lat)
  //   console.log(this.state.long)
  //   console.log(this.state.name)
  //   console.log(this.state.email)
  //   console.log(this.state.phone)
  //   console.log(this.state.hashed_password)
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

  // toAddressGoogle = async (toGoogleAddress) => {
  //   await fetch(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json?address=${toGoogleAddress}&key=AIzaSyBixPOjrGSjxpkw-pszxd_iUvQdbMBTXxg`, {
  //     method: "GET", "Content-Type": "application/json",
  //   })
  //     .then(response => response.json())
  //     .then(data => { this.setState({ location: data.results[0].geometry.location }) })
  // }

  // searchPrices = (e) => {
  //   e.preventDefault()

  //   const toAddress = e.target[1].value
  //   Promise.all([this.fromAddressGoogle(fromAddress), this.toAddressGoogle(toAddress)])
  //     .then(() => {
  //       const lat = this.state.pickupLatLong.lat; 
  //       const puLong = this.state.pickupLatLong.lng; 

  //     })

  // }


  render() {
    return (
      <View style={styles.form}>
        <Heading >My Weather Buddy</Heading>

        {/* <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>
         
          <FontAwesome>{snowflake}</FontAwesome>
        </Text> */}

        <Image style={styles.snowflake} source={require('./assets/snowflake-solid.svg')} />

        <Image style={styles.snowflake} source={SvgComponent} />

        

        

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Name"
            name="name"
            // value={this.state.name}
            onChangeText={(e) => this.setName(e)}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Email"
            name="email"
            // value={this.state.email}
            onChangeText={(e) => this.setEmail(e)}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Phone"
            name="phone"
            // value={this.state.phone}
            onChangeText={(e) => this.setPhone(e)}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            name="hashed_password"
            // value={this.state.hashed_password}
            onChangeText={(e) => this.setPassword(e)}
          />
        </View>
        <Button
          title="Create Account"
          style={styles.create}
          onPress={() => {
            this.props.navigation.navigate('createAlert', { lat: this.state.lat }); this.createUser();
          }}
        />

        <Button
          style={styles.login}
          title="Already have an account? Login"
          onPress={() =>
            this.props.navigation.navigate('login')
          }
        //  onPress={(e) => { func1(); func2(); }}>
        />

        <Text style={styles.miniText}>**The location for your alerts will be set to your current location at the time of making the account. Please accept the GeoCoordinates request.**</Text>

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
    backgroundColor: 'white',
    borderColor: '#eee',
    padding: 5,
    margin: 8,
  },
  create: {
    width: '30%'
  },
  login: {
    width: '30%'
  },
  miniText: {
    width: '70%',
    marginTop: 40,
    fontWeight: '100',
  },
  snowflake: {
    width: 10,
    height: 10,
    borderColor: 'white',
    tintColor: 'black',
    zIndex: 2,
  }
})

export default CreateAccount