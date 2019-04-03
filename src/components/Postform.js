import React, { Component } from 'react'
import { Platform, StyleSheet, View, Button, TextInput, } from 'react-native'
import Heading from './Heading.js'

class Postform extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Jimbo',
      body: 'Hello world',
    }
    this.onChange = this.onChange.bind(this)
    this.onPress = this.onPress.bind(this)
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  onPress(e) {
    e.preventDefault()
    
    const newPost = {
      title: this.state.title,
      body: this.state.body
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newPost)
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }
  
  render() {
    return (
     
      <View style={styles.container}>
        <Heading> Postform </Heading>


        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            type="text"
            name="title"
            placeholder="title"
            value={this.state.title}
            onChange={this.onChange}
          />
          <TextInput
            style={styles.inputs}
            type="text"
            name="body"
            placeholder="body"
            value={this.state.body}
            onChange={this.onChange}
          />
        </View>

        <Button
          title="Login"
          // onPress={() => this.props.navigation.navigate('post')}
          onPress={this.onPress}
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