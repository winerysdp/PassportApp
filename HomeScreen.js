import React, {Component} from 'react';
import { AppRegistry, Alert, Button, Image, StyleSheet, Text, View, TextInput, Keyboard } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class HomeScreen extends Component {
	render(){
			const { navigate } = this.props.navigation;
		return(
				<View style = {styles.cover}>
					<Text style={{marginTop: 0, fontStyle: "italic", fontSize: 30}}> {"Welcome to the\nConnecticut Winery\nAssociation App"} </Text>
					<Image source={require('./assets/winery_cover.jpg')}
						style={{marginTop: 10,}}/>
					<Button
						title="Map"
						onPress={()=>navigate('Map')}/>
					<Button 
						title="My Passport"
						onPress={()=>navigate('PassNav')}/>
					<Button
						title="Upcoming Events"
						onPress={()=>navigate('Calendar')}/>
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