import React, { Component } from 'react'
import { Platform, StyleSheet, View, Button, Text, } from 'react-native'
import Heading from './Heading.js'

const puce = '#513B41'

class AccountDetails extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Heading> Account Details </Heading>

        <View style={styles.email}>
          <Text style={styles.sizer}>Email(UserName):</Text>
          <Text style={styles.sizerSmaller}>Matty85@aol.com</Text>
        </View>
        <Button
          title="Change Email"
          onPress={() => this.props.navigation.navigate('createAlert')}
        />

        <View style={styles.password}>
          <Text style={styles.sizer}>Password:</Text>
          <Text style={styles.sizer}>  *********</Text>
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
  sizer: {
    fontSize: 20,
    color: puce,
  },
  sizerSmaller: {
    fontSize: 16,
    color: puce,
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