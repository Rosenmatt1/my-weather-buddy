import React, { Component } from 'react'
import { Platform, StyleSheet, View, Button, Text, } from 'react-native'
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
          title="Change Email"
          onPress={() => this.props.navigation.navigate('createAlert')}
        />

        <View style={styles.password}>
          <Text>Password:</Text>
          <Text>*********</Text>
        </View>
        <Button
          title="Change Password"
          onPress={() => this.props.navigation.navigate('createAlert')}
        />

        <View style={styles.logout}>
          <Button
            title="Log Out"
            onPress={() =>
              this.props.navigation.navigate('login')
            }
          //  onPress={(e) => { func1(); func2(); }}>
          />
        </View>

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
  password: {
    flexDirection: 'row',
  },
  logout: {
    marginTop: 30,
  },
})

export default AccountDetails