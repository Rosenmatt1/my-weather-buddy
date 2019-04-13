import React, { Component } from "react";
import { View, StyleSheet, Text, Button, Image } from "react-native";
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
    fetch(`http://localhost:3000/user/1`, {
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

        <View style={styles.rower}>
          <Image style={styles.icon} source={require('./assets/wind.png')} />
          <Image style={styles.icon} source={require('./assets/sunny.png')} />
          <Image style={styles.snow} source={require('./assets/snowflake.png')} />
          <Image style={styles.icon} source={require('./assets/umbrella.png')} />
        </View>

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
              onPress={() => this.props.navigation.navigate('accountDetails', { lat: this.state.lat, long: this.state.long} )}
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
    justifyContent: 'center',
    marginBottom: 30
  },
  rower2: {
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
  miniText: {
    width: '70%',
    fontWeight: '200',
    marginBottom: 30,
    color: puce,
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
  icon: {
    height: 40,
    width: 40,
    margin: 10,
  },
  snow: {
    height: 37,
    width: 37,
    margin: 10,
  }
})

export default ViewAlerts