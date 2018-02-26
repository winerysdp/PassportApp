import React, {Component} from 'react';
import { AppRegistry, Alert, Button, Image, StyleSheet, Text, View, TextInput, Keyboard, Linking, Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class MapScreen extends Component {
	goToMap() {
		if (Platform.OS === 'ios') {
			Linking.openURL('http://maps.apple.com/?daddr=287+Judson+Ave,Mystic,Connecticut')
		}
		else {
			Linking.openURL('geo:287+Judson+Ave%2C+Mystic%2C+CT')
		}
	}
	render() {
			const {navigate} = this.props.navigation;
		return(
			<View>
				<Image source={require('./assets/Map_CT.jpg')}
					style={{marginTop: 20,
							marginLeft: 10,
							marginRight: 10,
							width: 300,
							height: 150,
							justifyContent: 'center',
							alignItems: 'center',}}>
				</Image>
				<Button
					title="Test"
					onPress={()=>this.goToMap()}/>
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