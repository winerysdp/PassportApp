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
			Linking.openURL('http://maps.apple.com/?daddr=46+Town+Line+Road,Bethlehem,CT')
		}
		else {
			Linking.openURL('geo:46+Town+Line+Road%2C+Bethlehem%2C+CT')
		}
	}
}

var bobsWine = new winery("Bethlehem Vineyard and Winery", require('./assets/wine3.jpg'), "46 Town Line Road, Bethlehem, CT 06751", "Friendly, warm, charming, delicious describes our winery experience. Welcome to our family's small farm winery located in Bethlehem, the Christmas Town! For the past ten years we have been making wine and sharing with our family and friends. Now, we are excited to share our vineyard and welcome you as part of our extended family, to enjoy our wine, the ancient symbol of community, prosperity and well-being. On July 6, 2013, we opened to the public offering two wines: Cayuga White and Santa's Helper. In 2014, we introduced four additional wines: Crèche, Holiday Cheer Rosé, and TLC. For the 2016 season 7 wines are available for your enjoyment. The latest being Old St. Nicholas a white wine made from estate grown Traminette grapes.");

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
					width: 300,
					height: 350
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
					onPress={()=>navigate('Bishops')}
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