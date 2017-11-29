import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'


export default class Cross extends Component {
  render() {
    const {xTranslate, yTranslate} = this.props
    return (
      <View style={[styles.container, {
        transform: [
          {translateX: xTranslate ? xTranslate : 10},
          {translateY: yTranslate ? yTranslate : 10},
        ]
      }]}>
        <View style={[styles.line, {
            transform: [
              {rotate: '45deg'},
            ]
          }]}>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 80,
    height: 80,
  },
  line: {
    backgroundColor: '#000',
    width: 10,
    height: 113,
  },
})
