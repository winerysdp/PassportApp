import React, {Component} from 'react';
import { AppRegistry, Alert, Button, Image, StyleSheet, Text, View, TextInput, Keyboard, ScrollView, Linking, Platform, AsyncStorage } from 'react-native';
import { StackNavigator } from 'react-navigation';
import {stamped} from './QRScanner.js';

//var stamped = AsyncStorage.getItem('stamped', (value) => {JSON.parse(value)});
//AsyncStorage.setItem('stamped', JSON.stringify(false));
//stamped = false;
export default class Arrigoni extends Component {
constructor(props) {
		super(props);
		this.state = {text: ""};
		this.name = "Arrigoni Winery";
		this.picture = require('./assets/wine1.jpg');
		this.address = "1287 Portland-Cobalt Road, Rte 66, Portland, CT 06480";
		this.info = "Arrigoni Winery is nestled in the fertile Connecticut River Valley, and offers visitors an indoor Tasting Room and seating area with 18 different wines, a relaxing sunset Patio, vineyard-side picnic area and covered and heated Pavilion. After a wine tasting, browse the extensive gift shop and enjoy live music and scenic views of the vineyard. Event space is available year-round for weddings, bridal showers, family reunions and more. Please contact Monica@arrigoniwinery.com to learn more. Bus parking and private event parking available. Visitors are encouraged to bring a picnic. No outside beverages allowed. Open year-round.";
		this.stamp = require('./assets/Stamp.png');
		this.noStamp = require('./assets/no-stamp.png');
	}
	goToMap() {
		if (Platform.OS === 'ios') {
			Linking.openURL('http://maps.apple.com/?daddr=1287+Portland-Cobalt+Road,Portland,CT')
		}
		else {
			Linking.openURL('geo:1287+Portland-Cobalt+Road%2C+Portland%2C+CT')
		}
	}
	displayStamp() {
		if (stamped[0]) {
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
					width: 75,
					height: 75,
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
						width: 75,
						height: 75,
					}}
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
					onChangeText={(text) => this.setState({text})}
					value={this.state.text}
				/>
				{/*<Button title="View next Winery" onPress={() => navigate('Bethlehem')}/>*/}
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