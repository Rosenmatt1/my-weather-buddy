import React, { Component } from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import Heading from './Heading.js'

class ViewAlert extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Heading>Current Alerts</Heading>

        <Text style={styles.miniText}> **Alerts are sent at 7pm the night before the weather condition will be met** </Text>

        <View style={styles.alertContainer}>
        <View>
          <Text>Alert 1</Text>
          <Text>Content of Alert.  If over 90 degrees, wear shorts and sandals.</Text>
          </View>

          <View style={styles.rower}>
            <Button
              style={styles.delete}
              title="Delete"
              onPress={() =>
                this.props.navigation.navigate('viewAlerts')
              }
            //  onPress={(e) => { func1(); func2(); }}>
            />
            <Button
              style={styles.update}
              title="Edit"
              onPress={() =>
                this.props.navigation.navigate('viewAlerts')
              }
            //  onPress={(e) => { func1(); func2(); }}>
            />
          </View>
        </View>


        <Button
          // style={styles.buttons}
          title="Create New Alert"
          onPress={() =>
            this.props.navigation.navigate('createAlert')
          }
        //  onPress={(e) => { func1(); func2(); }}>
        />

        <Button
          // style={styles.buttons}
          title="Account Details"
          onPress={() =>
            this.props.navigation.navigate('accountDetails')
          }
        //  onPress={(e) => { func1(); func2(); }}>
        />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  rower: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: '#C8F4F9',
  },
  alertContainer: {
    width: '70%',
    borderColor: '#513B41',
    backgroundColor: 'white',
    
  },
  inputs: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#eee',
    padding: 5,
    margin: 8,
  },
  update: {
    width: '30%'
  },
  delete: {
    width: '30%',
    color: 'red',
  },
  miniText: {
    width: '70%',
    fontWeight: '100',
  },

})

export default ViewAlert