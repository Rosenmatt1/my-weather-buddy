import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';


export default class App extends Component {
  render() {
    return (

      <View style={styles.container}>
        <Text style={styles.title} >My Weather Buddy</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
    backgroundColor: '#C8F4F9',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    alignContent: 'flex-start',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
