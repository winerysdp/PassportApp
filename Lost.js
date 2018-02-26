import React, {Component} from 'react';
import { AppRegistry, Alert, Button, Image, StyleSheet, Text, View, TextInput, Keyboard, ScrollView } from 'react-native';
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
			Linking.openURL('http://maps.apple.com/?daddr=80+Lost+Acres+Road,North+Granby,CT')
		}
		else {
			Linking.openURL('geo:80+Lost+Acres+Road%2C+North+Granby%2C+CT')
		}
	}
}
var name = "Lost Acres Vineyards";
var address = "80 Lost Acres Road, North Granby, CT 06060 ";
var description = "In the 1700’s, Lost Acres was a political no-man’s land known as “The Wedge.” In the early 1800’s the Wedge’s free spirited, independent minded, cider distilling hill farmers populated the area. Lost Acres Vineyard has extended this tradition into grape wine. We produce hand crafted boutique white and red wines, including our most popular wine, Wedge White. Grape growing and wine making is the central activity of our farm, but not the only one. Our horses and herb gardens also keep us busy. A visit to Lost Acres Vineyard offers great wine, art shows, picnics, music and more.";
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
					onPress={()=>navigate('Maugle')}
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