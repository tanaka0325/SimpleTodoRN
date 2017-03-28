import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import Header from './components/Header'
import TodoList from './components/TodoList'
import Footer from './components/Footer'

export default class App extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Header />
        <TodoList />
        <Footer />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: 20,
    backgroundColor: 'ghostwhite',
  }
})
