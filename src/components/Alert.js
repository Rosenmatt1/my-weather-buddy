import React, { Component } from "react";
import { View, Text } from "react-native";
import Alert from './Alert.js'

// const puce = '#513B41'

class Alert extends Component {
  
  render() {
    return (
      <View>
        <Text>Hello!</Text>
        {/* <View style={styles.alertContainer}>
          <View style={styles.center}>
            <Text style={styles.puceColor}>Alert 1</Text>
            <Text style={styles.puceColor}>Eat cookies</Text>
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
        /> */}
      </View>
    )
  }
}

// const styles = StyleSheet.create({
//   rower: {
//     flexDirection: 'row',
//     justifyContent: 'center'
//   },
//   puceColor: {
//     color: puce,
//   },
//   center: {
//     justifyContent: 'center',
//     alignItems: "center",
//   },
//   container: {
//     flex: 1,
//     width: '100%',
//     justifyContent: 'center',
//     alignItems: "center",
//     backgroundColor: '#C8F4F9',
//   },
//   alertContainer: {
//     width: '70%',
//     borderWidth: 1,
//     borderColor: puce,
//     borderRadius: 15,
//     backgroundColor: 'white',
//     marginBottom: 30,
//   },
//   update: {
//     width: '30%'
//   },
//   delete: {
//     width: '30%',
//     color: '#F83839',
//   },
// })

export default Alert