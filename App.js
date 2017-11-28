import React, {Component} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from './components/Header'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Text style={styles.welcome}> Welcome to the game! </Text>
        <Text style={styles.instructions}> Click here to start </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    margin: 10,
  },
  instructions: {
    color: '#333333',
    marginBottom: 5,
  },
})
