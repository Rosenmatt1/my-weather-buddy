import React, { Component } from 'react'
import { Platform, StyleSheet, View, Button, TextInput, } from 'react-native'
import Heading from './Heading.js'

class Postform extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: '',
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  
  render() {
    return (
     
      <View style={styles.container}>
        <Heading> Postform </Heading>


        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            name="name"
            placeholder="name"
            value={this.state.title}
            onChangeText={this.onChangeText}
          />
          <TextInput
            style={styles.inputs}
            name="body"
            placeholder="body"
            value={this.state.body}
            onChangeText={this.onChangeText}
          />
        </View>

        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('post')}
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
  inputContainer: {
    width: '70%'
  },
  inputs: {
    width: '100%',
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: '#eee',
    padding: 5,
    margin: 8,
  },
})

export default Postform