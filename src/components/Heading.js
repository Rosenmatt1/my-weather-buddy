import React from 'react'
import { Text, StyleSheet } from 'react-native'

const heading = props => (
  <Text {...props} style={[styles.header, props.style]}> {props.children} </Text>
)

const styles = StyleSheet.create({
  header: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#513B41'
  },
})

export default heading