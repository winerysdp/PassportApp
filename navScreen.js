import React, {Component} from 'react';
import { AppRegistry, Alert, Button, Image, StyleSheet, Text, View, TextInput, Keyboard, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class navScreen extends Component {
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={{justifyContent: 'center', alignItems: 'center'}}>
				<TouchableHighlight style = {{
					justifyContent: 'center',
					padding: 10
				}}
				onPress={() => navigate('Note')}>
				<Text> Go to Note Screen </Text>
				</TouchableHighlight>
				<TouchableHighlight style = {{
					justifyContent: 'center',
					padding: 10
				}}
				onPress={() => navigate('Product')}>
				<Text> Go to Product Screen </Text>
				</TouchableHighlight>
				<TouchableHighlight style = {{
					justifyContent: 'center',
					padding: 10
				}}
				onPress={() => navigate('Review')}>
				<Text> Go to Review Screen </Text>
				</TouchableHighlight>
			</View>
			)
	}
}