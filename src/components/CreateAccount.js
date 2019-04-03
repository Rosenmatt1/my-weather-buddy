import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import Heading from './Heading.js'

class CreateAccount extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'John',
      phone: '303-555-7777',
      email: 'Lang@aol.com',
      hashed_password: '3r8&653%1',
      lat: 39,
      long: 105,
    }
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(position => this.setState({
      lat: position.coords.latitude
    }),
      err => this.setState({
        errorMessage: err.message
      })
    )
  }

  getLocation = () => {
    // window.navigator.geolocation.getCurrentPosition(position => this.setState({
    //   lat: position.coords.latitude,
    //   long: position
    // }),
    //   err => this.setState({
    //     errorMessage: err.message
    //   })
    // )
    console.log(this.state.lat)
    console.log(this.state.long)
    // console.log(this.state.name)
    // console.log(this.state.email)
    // console.log(this.state.phone)
    // console.log(this.state.hashed_password)
  }

   createUser = (e) => {
    e.preventDefault()
    this.setState({
      name: e.target[0].value,
      email: e.target[1].value,
      phone: e.target[2].value,
      hashed_password: e.target[3].value,
    })
     console.log(this.state.name)
     console.log(this.state.email)
     console.log(this.state.phone)
     console.log(this.state.hashed_password)
    this.postUser()
  }

  postUser = () => {
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      hashed_password: this.state.hashed_password
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
        <Heading >My Weather Buddy</Heading>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Name"
            // value={this.state.name}
          // onChangeText={this.placeNameChangedHandler}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Email"
            // value={this.state.email}
          // onChangeText={this.placeNameChangedHandler}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Phone"
            // value={this.state.phone}
          // onChangeText={this.placeNameChangedHandler}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            // value={this.state.password}
          // onChangeText={this.placeNameChangedHandler}
          />
        </View>
        <Button
          title="Create Account"
          style={styles.create}
          onPress={() => {
            this.props.navigation.navigate('createAlert', { lat: this.state.lat });
            this.getLocation(); () => this.createUser();
    }
          }
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
})

export default CreateAccount