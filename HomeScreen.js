import React, {Component} from 'react';
import { AppRegistry, Alert, Button, Image, StyleSheet, Text, View, TextInput, Keyboard } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class HomeScreen extends Component {
	render(){
			const { navigate } = this.props.navigation;
		return(
				<View style = {styles.book}>
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
  contentContainer: {
	paddingVertical: 20
  },
  book: {
    flex: 1,
    backgroundColor: '#eaefff',
    //color: '#4b85bc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navImage: {
	marginTop: 20,
	resizeMode: 'contain',
	resizeMode: 'cover',
	width: 100,
	height: 100,
  },
  row: {
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center',
  },
  button: {
	margin: 20,
	backgroundColor: '#4b85bc',
	//color: '#eaefff',
	position: 'absolute',
	bottom: 0,
  },
});