import React, {Component} from 'react';
import { AppRegistry, Alert, Button, Image, StyleSheet, Text, View, TextInput, Keyboard } from 'react-native';
import { StackNavigator } from 'react-navigation';

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
		<Text style={{fontWeight: 'bold'}, {color: 'white'}}> My Passport </Text>
		<View style={styles.button}>
			<Button
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
	margin: 20,
	position: 'absolute',
	bottom: 0,
  },
});