import React, {Component} from 'react';
import { AppRegistry, Alert, Button, Image, StyleSheet, Text, View, TextInput, Keyboard } from 'react-native';
import { StackNavigator } from 'react-navigation';
import noteScreen from './NoteScreen.js';
import Arrigoni from './Arrigoni.js';
import Bishops from './Bishops.js';
import Bethlehem from "./Bethlehem.js";
import Brignole from "./Brignole.js";
import passCover from './PassCover.js';
import passNav from './PassNav.js';

const App = StackNavigator({
	Passport: { screen: passCover},
	Note: { screen: noteScreen},
	Arrigoni: { screen: Arrigoni},
	Bishops: { screen: Bishops},
	Bethlehem: {screen: Bethlehem},
	Brignole: {screen: Brignole},
	PassNav: { screen: passNav},
});

export default App;