import React, { Component } from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const puce = '#513B41'

class Alert extends Component {

  render() {
    return (
      <View style={styles.alertContainer}>
        <View style={styles.center}>
          <Text style={styles.title}>Alert {this.props.alert.id}</Text>
          <Text style={styles.message}>{this.props.alert.message}</Text>
        </View>

        <View style={styles.rower}>
          <View style={styles.buttonStyler}>
            <Button
              style={styles.delete}
              title="Delete"
              color={puce}
              onPress={() => this.props.navigation.navigate('viewAlerts')}
            />
          </View>

          <View style={styles.buttonStyler}>
            <Button
              style={styles.update}
              title="Edit"
              color={puce}
              onPress={() => this.props.navigation.navigate('viewAlerts')}
            />
          </View>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  rower: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  title: {
    color: puce,
    margin: 5,
    fontWeight: 'bold',
    fontSize: 22,
  },
  message: {
    color: puce,
    fontSize: 16,
  },
  center: {
    justifyContent: 'center',
    alignItems: "center",
  },
  alertContainer: {
    width: '70%',
    borderWidth: 1,
    borderColor: puce,
    borderRadius: 15,
    backgroundColor: 'white',
    marginBottom: 11,
  },
  buttonStyler: {
    borderWidth: 1,
    borderColor: puce,
    borderRadius: 10,
    height: 50,
    margin: 10,
    // padding: 10,
    // shadowColor: '#7FE5F0',
    // shadowOffset: {
    //   width: 0,
    //   height: 3
    // },
    // shadowRadius: 10,
    // shadowOpacity: 0.25
  },
  update: {
    width: '30%',
  },
  delete: {
    width: '30%',
    color: '#F83839',
  },
})

export default Alert

