import React, {Component} from 'react';
import { AppRegistry, Alert, Button, Image, StyleSheet, Text, View, TextInput, Keyboard, ScrollView, Linking, Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';

class winery {
	constructor(name, picture, address, info) {
		this.name = name;
		this.pic = picture;
		this.address = address;
		this.info = info;
		this.stamp = require('./assets/no-stamp.png');
	}
	goToMap() {
		if (Platform.OS === 'ios') {
			Linking.openURL('http://maps.apple.com/?daddr=825-827+Colonel+Ledyard+Highway,Ledyard,CT')
		}
		else {
			Linking.openURL('geo:825-827+Colonel+Ledyard+Highway%2C+Ledyard%2C+CT')
		}
	}
}
var name = "Maugle Sierra Vineyards";
var address = "825-827 Colonel Ledyard Highway, Ledyard, CT 06339";
var description = "Savor a taste of New England wine at Maugle Sierra Vineyards. Specializing in St. Croix wine, wine grapes and handcrafted wines. More than 60% of our wines are produced with grapes grown on the estate, and the majority of the rest are grown within 100 miles of the vineyard.";
var bobsWine = new winery(name, require('./assets/wine3.jpg'), address, description);

export default class wineryScreen extends Component {
constructor(props) {
		super(props);
		this.state = {wine: bobsWine,};
	}
	render() {
		const { navigate } = this.props.navigation;
		return(
			<View style={styles.book}>
			<ScrollView contentContainerStyle={styles.contentContainer}>
				<View style = {{
					alignItems: 'center',
				}}>
				<Text style = {{fontSize: 32, color: '#14487a', fontWeight: 'bold', textAlign: 'center'}}> {this.state.wine.name} </Text>
				<Image 
				source={this.state.wine.pic}
				style={{
					marginTop: 20,
					justifyContent: 'center',
					alignItems: 'center',
					resizeMode: 'contain',
					resizeMode: 'cover',
					width: 75,
					height: 150,
				}}
				/>
				<Button style = {{fontSize: 12, color: '#14487a', textAlign: 'center'}} title = {this.state.wine.address} onPress={()=>this.state.wine.goToMap()}/>
				<Image 
				source={this.state.wine.stamp}
				style={{
					marginTop: 20,
					justifyContent: 'center',
					alignItems: 'center',
					resizeMode: 'contain',
					resizeMode: 'cover',
					width: 75,
					height: 75,
				}}
				/>
				<Text style = {{fontSize: 12, color: '#14487a', textAlign: 'center'}}> {this.state.wine.info} </Text>
				</View>
				<Text style={{fontSize: 20, textAlign: 'center', color: '#14487a'}}>
					Notes
				</Text>
				<TextInput
					style={{
						height: 200,
						width: 250,
						fontSize: 15,
						backgroundColor: 'white',
					}}
					
					editable = {true}
					multiline = {true}
					numberofLines = {4}
					onChangeText={(text) => this.setState({text})}
					value={this.state.text}
				/>
				<Button
					title="View next Winery"
					onPress={()=>navigate('Miranda')}
				/>
				<Button
					title="Back to Main Menu"
					onPress={()=>navigate('PassNav')}
				/>
				</ScrollView>
			</View>
			
		);
	}
}
const styles = StyleSheet.create({
  contentContainer: {
	paddingVertical: 20,
	alignItems: 'center',
  },
  book: {
    flex: 1,
    backgroundColor: '#eaefff',
    //color: '#4b85bc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navImage: {
	marginTop: 10,
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
	margin: 10,
	backgroundColor: '#4b85bc',
	//color: '#eaefff',
	marginTop: 100,
	position: 'absolute',
	bottom: 0,
  },
 
});