import React, {Component} from 'react';
import { AppRegistry, Alert, Button, Image, StyleSheet, Text, View, TextInput, Keyboard, ScrollView, Linking, Platform, AsyncStorage} from 'react-native';
import { StackNavigator } from 'react-navigation';
import {stamped} from './QRScanner.js';

export default class Paradise extends Component {
constructor(props) {
		super(props);
		this.state = {text: ""};
		this.name = "Paradise Hills Vineyard and Winery";
		this.pic = require('./assets/ParadiseHillsWine.jpg');
		this.phone = '203-284-0123';
		this.address = "15 Wind Swept Hill Road, Wallingford, CT 06492";
		this.info = 'Open year round: Mon-Sat 11am-8 pm, Sun 11am-6pm. Family owned and operated since 1997, Paradise is a Tuscan styled winery nestled among 65 picturesque acres of rolling hills along the Washington Trail in Wallingford. The winery, tasting room, and décor instantly transports you to the wine country in Europe: a hand crafted copper bar; chandeliers; soft Italian music playing in the tasting room and under our arched portico. A romantic, intimate setting, Paradise is the year round winery to visit and enjoy some of the finest Connecticut wines. Come summer picnicking or cozy up by the warm winter fire with family and friends. Come to Paradise.';
		this.stamp = require('./assets/Stamp.png');
		this.noStamp = require('./assets/no-stamp.png');
	}
	componentDidMount() {
		AsyncStorage.getItem('Paradise').then((value) => {
		if (value !== null){
			// saved input is available
			this.setState({ text: value }); // Note: update state with last entered value
		}
		}).done();
}
	goToMap() {
		if (Platform.OS === 'ios') {
			Linking.openURL('http://maps.apple.com/?daddr=15+Wind+Swept+Hill+Road,Wallingford,CT')
		}
		else {
			Linking.openURL('https://www.google.com/maps/dir/?api=1&destination=15+Wind+Swept+Hill+Road%2C+Wallingford%2C+CT')
		}
	}
	displayStamp() {
		if (stamped[22]) {
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
						AsyncStorage.setItem('Paradise', text); // Note: persist input
					 }}
					value={this.state.text}
				/>
				{/*<Button title="View next Winery" onPress={() => navigate('Preston')}/>*/}
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