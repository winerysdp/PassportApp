import React, {Component} from 'react';
import { AppRegistry, Alert, Button, Image, StyleSheet, Text, View, TextInput, Keyboard, ScrollView, Linking, Platform, AsyncStorage} from 'react-native';
import { StackNavigator } from 'react-navigation';
import {stamped} from './QRScanner.js';

export default class Bethlehem extends Component {
constructor(props) {
		super(props);
		this.state = {text: ""};
		this.name = "Bethlehem Vineyard and Winery";
		this.pic = require('./assets/BethlehemWine.jpg');
		this.phone = '203-266-5024';
		this.address = "46 Town Line Road, Bethlehem, CT 06751";
		this.info = 'Only open the following Sat-Sun from 1pm-5pm: May 5-6, 26-27; June 2-3, & 30; July 1, 7-8 14-15; Aug 4-5, 11-12; Sept 1-2, 8-9; Oct 6-7, 13-14, 20-21; Nov 3-4. Open Dec 1-2 & 8-9: 11am-3pm. Friendly, warm, charming, delicious describes our winery experience. Welcome to our familys small farm winery located in Bethlehem, the Christmas Town! For the past ten years we have been making wine and sharing with our family and friends. Now, we are excited to share our vineyard and welcome you as part of our extended family, to enjoy our wine, the ancient symbol of community, prosperity and well-being. On July 6, 2013, we opened to the public offering two wines: Cayuga White and Santas Helper. In 2014, we introduced four additional wines: Crèche, Holiday Cheer Rosé, and TLC. For the 2016 season 7 wines are available for your enjoyment. The latest being Old St. Nicholas a white wine made from estate grown Traminette grapes.';
		this.stamp = require('./assets/Stamp.png');
		this.noStamp = require('./assets/no-stamp.png');
	}
	componentDidMount() {
		AsyncStorage.getItem('Bethlehem').then((value) => {
		if (value !== null){
			// saved input is available
			this.setState({ text: value }); // Note: update state with last entered value
		}
		}).done();
}
	goToMap() {
		if (Platform.OS === 'ios') {
			Linking.openURL('http://maps.apple.com/?daddr=46+Town+Line+Road,Bethlehem,CT')
		}
		else {
			Linking.openURL('https://www.google.com/maps/dir/?api=1&destination=46+Town+Line+Road%2C+Bethlehem%2C+CT')
		}
	}
	displayStamp() {
		if (stamped[1]) {
			return ( 
				<View>
				<Image 
				source={this.stamp}
				style={{
					marginTop: 20,
					justifyContent: 'center',
					alignItems: 'center',
					resizeMode: 'contain',
					resizeMode: 'cover',
					width: 125,
					height: 125,
				}}
				/>
				</View>
			);
		}
		else {
			return(
				<View>
				<Image 
					source={this.noStamp}
					style={{
						marginTop: 20,
						justifyContent: 'center',
						alignItems: 'center',
						resizeMode: 'contain',
						resizeMode: 'cover',
						width: 125,
						height: 125,
					}}
				
				/>
				<Button
				style={styles.button}
				onPress={() => navigate('QRScanner')}
				title="QR Scanner"
				/>
				</View>
			);
		}
	}
	render() {
		const { navigate } = this.props.navigation;
		return(
			<View style={styles.book}>
			<ScrollView contentContainerStyle={styles.contentContainer}>
				<View style = {{
					alignItems: 'center',
				}}>
				<Button style = {{fontSize: 12, color: 'blue', textAlign: 'Left'}} title = "< Back to Main Menu" onPress={()=> navigate('PassNav')}/>
				<Text style = {{fontSize: 32, color: '#14487a', fontWeight: 'bold', textAlign: 'center'}}> {this.name} </Text>
				<Image 
				source={this.pic}
				style={{
					//marginTop: 20,
					justifyContent: 'center',
					alignItems: 'center',
					resizeMode: 'contain',
					width: 300,
					height: 350
				}}
				/>

				<Text style = {{fontSize: 20, fontWeight: 'bold', color: '#14487a', textAlign: 'center'}}> {this.phone} </Text>	
				<Button style = {{fontSize: 12, color: '#14487a', textAlign: 'center'}} title = {this.address} onPress={()=>this.goToMap()}/>
				{this.displayStamp()}
				<Text style = {{fontSize: 12, color: '#14487a', textAlign: 'center'}}> {this.info} </Text>
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
					 onChangeText={(text) => { 
						this.setState({text});
						AsyncStorage.setItem('Bethlehem', text); // Note: persist input
					 }}
					value={this.state.text}
				/>
				{/*<Button title="View next Winery" onPress={() => navigate('Bishops')}/>*/}
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