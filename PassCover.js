import React, {Component} from 'react';
import { AppRegistry, Alert, Button, Image, StyleSheet, Text, View, TextInput, Keyboard } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Font } from 'expo';

export default class passCover extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: 'Passport Home',
		};
	}

	render() {
		const { navigate } = this.props.navigation;
	return (
	<View style={styles.cover}>
		<Text style={{fontWeight: 'bold', color: 'white', fontSize: 80, textAlign: 'center'}}> My Passport </Text>
		<View style={styles.button}>
			<Button
				color='white'
				title="Next Page"
				onPress= {() => navigate('PassNav')}
			/>
		</View>
	</View>
	);
  }
}
const styles = StyleSheet.create({
  cover: {
    flex: 1,
    backgroundColor: '#4863A0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
	//backgroundColor: '#14487a',
	margin: 40,
	width: 150,
	height: 50,
	position: 'absolute',
	bottom: 0,
  },
});