import React, { Component } from "react";
import { View, Text, Button} from "react-native";

const puce = '#513B41'

class Alert extends Component {
  
  render() {
    return (
      <View>
        <Text>Hello!</Text>
        <View style={styles.alertContainer}>
          <View style={styles.center}>
            <Text style={styles.title}>{this.props.alert.id}</Text>
            <Text style={styles.puceColor}>{this.props.alert.message}</Text>
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
          title="Create New Alert"
          onPress={() => this.props.navigation.navigate('createAlert')}
        />

        <Button
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
})

export default Alert