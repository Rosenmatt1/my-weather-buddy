import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import Heading from './Heading.js'

class CreateAccount extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: 865,
      long: null,
    }
  }

  // componentDidMount() {
  //   window.navigator.geolocation.getCurrentPosition(position => this.setState({
  //     lat: position.coords.latitude
  //   }),
  //     err => this.setState({
  //       errorMessage: err.message
  //     })
  //   )
  // }

  getLocation = () => {
    window.navigator.geolocation.getCurrentPosition(position => this.setState({
      lat: position.coords.latitude
    }),
      err => this.setState({
        errorMessage: err.message
      })
    )
    console.log(this.state.lat)
  }


  render() {
    return (
      <View style={styles.form}>
        <Heading >My Weather Buddy</Heading>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Name"
          // value="this will be state name"
          // onChangeText={this.placeNameChangedHandler}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Email"
          // value="this will be state email"
          // onChangeText={this.placeNameChangedHandler}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Phone"
          // value="this will be state phone"
          // onChangeText={this.placeNameChangedHandler}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Password"
          // value="this will be state password"
          // onChangeText={this.placeNameChangedHandler}
          />
        </View>
        <Button
          title="Create Account"
          style={styles.create}
          onPress={() => {
            this.props.navigation.navigate('createAlert')
            this.getLocation()
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