import React, { Component } from 'react'
import { Platform, StyleSheet, View, Button, Text, Image } from 'react-native'
import Heading from './Heading.js'
import ChangeEmail from './ChangeEmail.js'

const puce = '#513B41'

class AccountDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notdisplay: true,
    }
  }

  static navigationOptions = {
    header: null,
  }

  changeEmail = () => {
    this.setState({
      notdisplay: false
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Heading style={styles.header}> Account Details </Heading>

        <View style={styles.rower}>
          <Image style={styles.icon} source={require('./assets/wind.png')} />
          <Image style={styles.icon} source={require('./assets/sunny.png')} />
          <Image style={styles.snow} source={require('./assets/snowflake.png')} />
          <Image style={styles.icon} source={require('./assets/umbrella.png')} />
        </View>

          <View style={styles.holder}>
          <Text style={styles.sizer}><Text style={styles.bolder}>Email(UserName):</Text>  </Text>
            <Text style={styles.sizer}>matty85@aol.com</Text>
          </View>
          <Button
            title="Change Email"
            onPress={() => this.changeEmail()}
          />
        
        <View style={styles.holder}>
          <Text style={styles.sizer}><Text style={styles.bolder}>Password:</Text></Text>
          <Text style={styles.sizer}>  *********</Text>
        </View>
        <Button
          title="Change Password"
          onPress={() => this.changePassword()}
        />

        <View style={styles.holder}>
          <Text style={styles.sizer}><Text style={styles.bolder}>lat:</Text> 39.7392</Text>
          <Text style={styles.sizer}>  <Text style={styles.bolder}>long:</Text> 104.9903</Text>
        </View>
        <Button
          title="Change Lat & Long"
          onPress={() => this.changePassword()}
        />

        <View style={styles.logout}>
          <Button
            title="Log Out"
            color='white'
            onPress={() => { this.props.navigation.navigate('login', { lat: this.state.lat, long: this.state.long }) }}
          //  onPress={(e) => { func1(); func2(); }}>
          />
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 0
  },
  rower: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30
  },
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
  holder: {
    flexDirection: 'row',
    marginTop: 20
  },
  logout: {
    marginTop: 40,
    marginLeft: 20,
    backgroundColor: puce,
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25
  },
  bolder: {
    fontWeight: 'bold',
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

export default AccountDetails