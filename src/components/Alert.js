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
          <Button
            style={styles.delete}
            title="Delete"
            onPress={() => this.props.navigation.navigate('viewAlerts')}
          />
          <Button
            style={styles.update}
            title="Edit"
            onPress={() => this.props.navigation.navigate('viewAlerts')}
          />
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
    marginBottom: 30,
  },
  update: {
    width: '30%'
  },
  delete: {
    width: '30%',
    color: '#F83839',
  },
})

export default Alert