import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={style.rootContainer}>
        <View style={style.displayContainer}>
          <Text>Hello App component.</Text>
        </View>
      </View>
    )
  }
}

const style = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: 'blue',
  },
  displayContainer: {
    backgroundColor: 'green',
  }
})
