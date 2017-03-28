import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Footer extends Component {
  render() {
    return (
      <View style={style.container}>
        <Text style={style.text}>Footer</Text>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 26,
  },
})
