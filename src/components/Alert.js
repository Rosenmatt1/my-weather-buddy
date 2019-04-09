import React, { Component } from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const puce = '#513B41'

class Alert extends Component {
  constructor(props) {
    super(props)
    this.state = {
      alerts: [],
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

  // deleteAlert = id => {
  //   this.setState(prevState => {
  //     return {
  //       alerts: prevState.alerts.filter(alert => {
  //         return alert.id !== id
  //       })
  //     }
  //   })
  // }

  deleteAlert = async (id) => {
    const removedAlert = this.state.alerts.filter(alert => {
      if (alert.id === id) {
      }
      return alert.id
    })
    const returnTheRest = this.state.alerts.filter(alert => alert.id !== id)
    await fetch(`http://localhost:3000/alert/1`, {
      method: 'DELETE',
      body: JSON.stringify(removedAlert),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    this.setState({
      alerts: returnTheRest,
    })
  }


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
              color='white'
              onPress={() => this.deleteAlert()}
            />
          </View>

          <View style={styles.buttonStyler}>
            <Button
              style={styles.update}
              title="Edit"
              color='white'
              // onPress={() => this.editAlert()}
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
    backgroundColor: puce,
    borderColor: puce,
    borderRadius: 10,
    width: 80,
    height: 40,
    margin: 10,
    shadowColor: '#7FE5F0',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25
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

