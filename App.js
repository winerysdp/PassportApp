import React, {Component} from 'react';
import { AppRegistry, Alert, Button, Image, StyleSheet, Text, View, TextInput, Keyboard } from 'react-native';
import { StackNavigator } from 'react-navigation';
import noteScreen from './noteScreen';
import productScreen from './productScreen';
import reviewScreen from './reviewScreen';
import navScreen from './navScreen';

const App = StackNavigator({
  Home: { screen: navScreen},
  Note: { screen: noteScreen},
  Product: { screen: productScreen},
	Review: { screen: reviewScreen},
});

export default App;
const styles = StyleSheet.create({
  cover: {
    flex: 1,
    backgroundColor: '#4863A0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  book: {
    flex: 1,
    backgroundColor: '#ffebcd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
	margin: 20,
  },
  row: {
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center',
  },
});
