import React, { Component } from 'react'
import { Platform, StyleSheet, View, Button, Text, } from 'react-native'
import Heading from './Heading.js'

class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {
    posts: [],
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => this.setState({posts: data}))
  }

  render() {
    const postItems = this.state.posts.map(item => (
      <View key={item.id}>
        <Heading>{item.title}</Heading>
        <Text>{item.body}</Text>
      </View>
    ))
    return (
      <View style={styles.container}>
        <Heading> Post </Heading>
        
          {postItems}

        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('postform')}
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
})

export default Post