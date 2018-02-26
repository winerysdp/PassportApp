import React, {Component} from 'react';
import { AppRegistry, Alert, Button, Image, StyleSheet, Text, View, TextInput, Keyboard } from 'react-native';
import { StackNavigator } from 'react-navigation';
import noteScreen from './NoteScreen.js';
import Arrigoni from './Arrigoni.js';
import Bishops from './Bishops.js';
import Bethlehem from "./Bethlehem.js";
import Brignole from "./Brignole.js";
import Cassidy from "./Cassidy.js";
import Chamard from "./Chamard.js";
import CTValley from "./CTValley.js";
import Dalice from "./Dalice.js";
import DiGrazia from "./DiGrazia.js";
import Gouveia from "./Gouveia.js";
import Haight from "./Haight.js";
import Hawk from "./Hawk.js";
import Holmberg from "./Holmberg.js";
import Hopkins from "./Hopkins.js";
import Jerram from "./Jerram.js";
import Jonathan from "./Jonathan.js";
import Jones from "./Jones.js";
import Land from "./Land.js";
import Lebanon from "./Lebanon.js";
import Lost from "./Lost.js";
import Maugle from "./Maugle.js";
import Miranda from "./Miranda.js";
import Paradise from "./Paradise.js";
import Preston from "./Preston.js";
import Priam from "./Priam.js";
import Rosabianca from "./Rosabianca.js";
import Rosedale from "./Rosedale.js";
import Saltwater from "./Saltwater.js";
import Savino from "./Savino.js";
import Sharpe from "./Sharpe.js";
import Staehly from "./Staehly.js";
import Stonington from "./Stonington.js";
import SunsetHill from "./SunsetHill.js";
import SunsetMeadow from "./SunsetMeadow.js";
import Taylor from "./Taylor.js";
import Walker from "./Walker.js";
import WhiteSilo from "./WhiteSilo.js";
import passCover from './PassCover.js';
import passNav from './PassNav.js';

const App = StackNavigator({
	Passport: { screen: passCover},
	Note: { screen: noteScreen},
	Arrigoni: { screen: Arrigoni},
	Bishops: { screen: Bishops},
	Bethlehem: {screen: Bethlehem},
	Brignole: {screen: Brignole},
	Cassidy: {screen: Cassidy},
	Chamard: {screen: Chamard},
	CTValley: {screen: CTValley},
	Dalice: {screen: Dalice},
	DiGrazia: {screen: DiGrazia},
	Gouveia: {screen: Gouveia},
	Haight: {screen: Haight},
	Hawk: {screen: Hawk},
	Holmberg: {screen: Holmberg},
	Hopkins: {screen: Hopkins},
	Jerram: {screen: Jerram},
	Jonathan: {screen: Jonathan},
	Jones: {screen: Jones},
	Land: {screen: Land},
	Lebanon: {screen: Lebanon},
	Lost: {screen: Lost},
	Maugle: {screen: Maugle},
	Miranda: {screen: Miranda},
	Paradise: {screen: Paradise},
	Preston: {screen: Preston},
	Priam: {screen: Priam},
	Rosabianca: {screen: Rosabianca},
	Rosedale: {screen: Rosedale},
	Saltwater: {screen: Saltwater},
	Savino: {screen: Savino},
	Sharpe: {screen: Sharpe},
	Staehly: {screen: Staehly},
	Stonington: {screen: Stonington},
	SunsetHill: {screen: SunsetHill},
	SunsetMeadow: {screen: SunsetMeadow},
	Taylor: {screen: Taylor},
	Walker: {screen: Walker},
	WhiteSilo: {screen: WhiteSilo},
	PassNav: { screen: passNav},
});

export default App;