import React, {Component} from 'react';
import { AppRegistry, Alert, Button, Image, StyleSheet, Text, View, TextInput, Keyboard } from 'react-native';
import { StackNavigator } from 'react-navigation';
import noteScreen from './NoteScreen.js';
import wineryScreen from './WineryScreen.js';
import passCover from './PassCover.js';
import passNav from './PassNav.js';
import homeScreen from './HomeScreen.js';
import mapScreen from './MapScreen.js';
import calendarScreen from './CalendarScreen.js';

const App = StackNavigator({
  Passport: { screen: passCover},
  Home: {screen: homeScreen},
  Map: {screen: mapScreen},
  Calendar: {screen: calendarScreen},
	Note: { screen: noteScreen},
	Winery: { screen: wineryScreen},
	PassNav: { screen: passNav},
});

export default App;