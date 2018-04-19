import React, {Component} from 'react';
import { AppRegistry, Alert, Button, Image, StyleSheet, Text, View, TextInput, Keyboard } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class ClanScreen extends Component {
	render() {
			const {navigate} = this.props.navigation;
		return(
			<View>
				<Image source={require('./assets/calendar.jpg')}
					style={{
							justifyContent: 'center',
							alignItems: 'center',
							resizeMode: 'cover',
							resizeMode: 'contain',
							width: 300,
							height: 150,}}>
				</Image>
				<Button
					title="Back"
					onPress={()=>navigate('Home')}/>
			</View>
			)
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