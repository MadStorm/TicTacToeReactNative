import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'


export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}> Welcome to the game! </Text>
        <Text style={styles.instructions}> Click here to start </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: 'skyblue',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
