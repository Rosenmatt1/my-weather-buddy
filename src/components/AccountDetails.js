import React, { Component } from 'react'
import { Platform, StyleSheet, View, Button, TextInput } from 'react-native'
import Heading from './Heading.js'

class AccountDetails extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Heading> Account Details </Heading>

        <View style={styles.email}>
          <Text>Email(UserName):</Text>
          <Text>Matty85@aol.com</Text>
        </View>

        <Button
          title="Change Password"
          onPress={() => this.props.navigation.navigate('createAlert')}
        />

        <Button
          style={styles.createAlert}
          title="Log Out"
          onPress={() =>
            this.props.navigation.navigate('login')
          }
        //  onPress={(e) => { func1(); func2(); }}>
        />

      </View>
    )
  }
}

const styles = StyleSheet.create({


  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C8F4F9',
  },
  email: {
    flexDirection: 'row',
  },
  inputContainer: {
    width: '70%'
  },
  inputs: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#eee',
    padding: 5,
    margin: 8,
  },
})

export default AccountDetails