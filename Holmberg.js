import React, {Component} from 'react';
import { AppRegistry, Alert, Button, Image, StyleSheet, Text, View, TextInput, Keyboard, ScrollView, Linking, Platform, AsyncStorage} from 'react-native';
import { StackNavigator } from 'react-navigation';
import {stamped} from './QRScanner.js';

export default class Holmberg extends Component {
constructor(props) {
		super(props);
		this.state = {text: ""};
		this.name = "Holmberg Orchard and Winery";
		this.pic = require('./assets/HolmbergWine.jpg');
		this.phone = '860-464-7305';
		this.address = "12 Orchard Drive, Gales Ferry, CT 06335";
		this.info = 'Tasting Room open May 26-Nov 4: Sat & Sun 12-5pm. Holmberg Orchards & Winery is a working fourth generation located in the Thames River Valley in Southeastern Connecticut, growing 50 acres of vineyard, tree fruits, berries, vegetables and more. Expect an authentic farm visit. You are likely to encounter the sights and sounds of production agriculture while in our quaint tasting area enjoying our estate grown wines and hard ciders.';
		this.stamp = require('./assets/Stamp.png');
		this.noStamp = require('./assets/no-stamp.png');
	}
	componentDidMount() {
		AsyncStorage.getItem('Holmberg').then((value) => {
		if (value !== null){
			// saved input is available
			this.setState({ text: value }); // Note: update state with last entered value
		}
		}).done();
}
	goToMap() {
		if (Platform.OS === 'ios') {
			Linking.openURL('http://maps.apple.com/?daddr=12+Orchard+Drive,Gales+Ferry,CT')
		}
		else {
			Linking.openURL('https://www.google.com/maps/dir/?api=1&destination=12+Orchard+Drive%2C+Gales+Ferry%2C+CT')
		}
	}
	displayStamp() {
		if (stamped[12]) {
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
				<Button style style = {{fontSize: 12, color: '#14487a', textAlign: 'center'}} title = {this.address} onPress={()=>this.goToMap()}/>
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
						AsyncStorage.setItem('Holmberg', text); // Note: persist input
					 }}
					value={this.state.text}
				/>
				{/*<Button title="View next Winery" onPress={() => navigate('Hopkins')}/>*/}
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