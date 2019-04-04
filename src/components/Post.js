import React, { Component } from 'react'
import { Platform, StyleSheet, View, Button, Text, } from 'react-native'
import PropTypes from 'prop-types'
import Heading from './Heading.js'
import { connect }from 'react-redux'
import { fetchPosts } from '../actions/PostActions'

class Post extends Component {

  componentDidMount() {
    this.props.fetchPosts()
  }

  getDerivedStateFromProps(nextProps) {
    if(nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost)
    }
  }
  

  render() {
    const postItems = this.props.posts.map(item => (
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

Post.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
})

export default connect(mapStateToProps, {fetchPosts})(Post)