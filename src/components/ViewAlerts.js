import React, { Component } from "react";
import { View, StyleSheet, Text, Button  } from "react-native";
import Heading from './Heading.js'
// import Alert from './Alert.js'

const puce = '#513B41'

class ViewAlerts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      alerts: [],
      received: false
    }
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
    Promise.all([this.getAlerts()])
      .then(() => {
        this.setState({
          received: true
        })
        console.log(this.state.received)
      })
  }

  // deleteAlert = id => {
  //   this.setState(prevState => {
  //     return {
  //       alerts: prevState.alerts.filter(alert => {
  //         return alert.id !== id
  //       })
  //     }
  //   })
  // }

  render() {

    return (
      <View style={styles.container}>

        <Heading>Current Alerts</Heading>
        <Text style={styles.miniText}> **Alerts are sent at 7pm the night before the weather condition will be met** </Text>

        {/* {this.state.received
          ?
          this.state.alerts.map((alert, idx) => {
            return <Alert
              key={idx}
              alert={alert}
            />
          })
          : <View></View>
        } */}

        <View style={styles.alertContainer}>
          <View style={styles.center}>
            <Text style={styles.title}>Alert 1</Text>
            <Text style={styles.message}>Wear hat and gloves.</Text>
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

        <Button
          // style={styles.buttons}
          title="Create New Alert"
          onPress={() => this.props.navigation.navigate('createAlert')}
        />

        <Button
          // style={styles.buttons}
          title="Account Details"
          onPress={() => this.props.navigation.navigate('accountDetails')}
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
    fontWeight: '200',
    marginBottom: 30,
    color: puce,
  },
})

export default ViewAlerts