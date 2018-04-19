import React, {Component} from 'react';
import { AppRegistry, Alert, Button, Image, StyleSheet, Text, View, TextInput, Keyboard } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class testScreen extends Component {
	render() {
		return(
		<View>
			<Text style={{fontSize: 20, textAlign: 'center'}}>
				{"This is a test page"}
			</Text>
			<Button 
				title = "Go back"
				onPress={() => this.props.navigation.navigate(Notes)}
			/>
		</View>
		)
	}
}