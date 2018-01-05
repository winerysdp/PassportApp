import React, {Component} from 'react';
import { AppRegistry, Alert, Button, Image, StyleSheet, Text, View, TextInput, Keyboard } from 'react-native';
import { StackNavigator } from 'react-navigation';
import noteScreen from './NoteScreen.js';
import wineryScreen from './WineryScreen.js';
import passCover from './PassCover.js';
import passNav from './PassNav.js';

const App = StackNavigator({
	Passport: { screen: passCover},
	Note: { screen: noteScreen},
	Winery: { screen: wineryScreen},
	PassNav: { screen: passNav},
});

export default App;