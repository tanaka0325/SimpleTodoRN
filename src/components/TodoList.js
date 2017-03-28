import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class TodoList extends Component {
  render() {
    return (
      <View style={style.container}>
        <Text>Hello TodoList component.</Text>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
  },
})
