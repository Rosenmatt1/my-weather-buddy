import React, { Component } from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import Heading from './Heading.js'

const puce = '#513B41'

class ViewAlert extends Component {
  constructor(props) {
    super(props)
  }

  // 'http://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&APPID=ab7c893ba66ab77f4354fb07e9abfd0e'

  render() {
    return (
      <View style={styles.container}>
        <Heading>Current Alerts</Heading>

        <Text style={styles.miniText}> **Alerts are sent at 7pm the night before the weather condition will be met** </Text>

        <View style={styles.alertContainer}>
          <View style={styles.center}>
            <Text style={styles.puceColor}>Alert 1</Text>
            <Text style={styles.puceColor}>Content of Alert.  If over 90 degrees, wear shorts and sandals.</Text>
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
  puceColor: {
    color: puce,
  },
  center: {
    justifyContent: 'center',
    alignItems: "center",
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
    borderWidth: 1,
    borderColor: puce,
    borderRadius: 15,
    backgroundColor: 'white',
    marginBottom: 30,
  },
  update: {
    width: '30%'
  },
  delete: {
    width: '30%',
    color: '#F83839',
  },
  miniText: {
    width: '70%',
    fontWeight: '100',
    marginBottom: 30,
  },

})

export default ViewAlert