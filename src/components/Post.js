import React, { Component } from 'react'
import { Platform, StyleSheet, View, Button, Text, } from 'react-native'
import Heading from './Heading.js'
import { connect }from 'react-redux'
import { fetchPosts } from '../actions/PostActions'

class Post extends Component {

  componentDidMount() {
    this.props.fetchPosts()
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

export default connect(null, {fetchPosts})(Post)