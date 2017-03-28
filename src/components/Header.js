import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={style.container}>
        <Text style={style.text}>SimpleTodoRN</Text>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    padding: 5,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 26,
  },
})
