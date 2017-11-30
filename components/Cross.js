/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

export default class Cross extends Component {
  render() {
    const { xTranslate, yTranslate, color } = this.props
    return (
      <View style={[styles.container, {
        transform: [
          {translateX: (xTranslate ? xTranslate : 10) + 35},
          {translateY: (yTranslate ? yTranslate : 10) - 12},
        ]
      }]}>
        <View style={[styles.line, {
          transform: [
            {rotate: '135deg'},
          ],
          backgroundColor: color ? color : '#000'
        }]} />
        <View style={[styles.line2, {
          transform: [
            {rotate: '135deg'},
          ],
          backgroundColor: color ? color : '#000'
        }]} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 99,
    height: 99,
    left: -40,
    top: 3,
  },
  line: {
    position: 'absolute',
    width: 8,
    height: 90,
    left: 40,
    top: 4,
  },
  line2: {
    position: 'absolute',
    width: 90,
    height: 8,
    top: 45,
    left: -1,
  },

})
