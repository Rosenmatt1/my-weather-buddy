import React, { Component } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import Heading from './Heading.js'
import Alert from './Alert.js'

const puce = '#513B41'

class ViewAlerts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      alerts: [],
    }
  }

  static navigationOptions = {
    header: null,
  }

  getAlerts = () => {
    fetch(`http://localhost:3000/`, {
      method: "GET",
      "Content-Type": "application/json",
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          alerts: data,
        })
        console.log("alerts", this.state.alerts)
      })
      .catch(error => {
        console.error(error)
      })
  }

  componentDidMount() {
    this.getAlerts()
  }

  
  render() {
    return (
      <View style={styles.container}>

        <Heading>Current Alerts</Heading>
        <Text style={styles.miniText}> **Alerts are sent at 7pm the night before the weather condition will be met** </Text>

        {this.state.alerts[0]
          ? this.state.alerts.map((alert, idx) => {
            return <Alert
              key={idx}
              alert={alert}
            />
          })
          : <View></View>
        }

        <View style={styles.rower}>
          <View style={styles.buttons}>
            <Button
              title="Create New Alert"
              color="white"
              onPress={() => this.props.navigation.navigate('createAlert')}
            />
          </View>

          <View style={styles.buttons}>
            <Button
              title="Account Details"
              color="white"
              onPress={() => this.props.navigation.navigate('accountDetails')}
            />
          </View>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: '#C8F4F9',
  },
  miniText: {
    width: '70%',
    fontWeight: '200',
    marginBottom: 30,
    color: puce,
  },
  rower: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttons: {
    backgroundColor: puce,
    borderRadius: 10,
    height: 60,
    margin: 10,
    marginTop: 35,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25
  },
})

export default ViewAlerts