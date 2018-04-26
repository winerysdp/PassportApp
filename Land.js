import React, {Component} from 'react';
import { AppRegistry, Alert, Button, Image, StyleSheet, Text, View, TextInput, Keyboard, ScrollView, Linking, Platform, AsyncStorage} from 'react-native';
import { StackNavigator } from 'react-navigation';
import {stamped} from './QRScanner.js';

export default class Land extends Component {
constructor(props) {
		super(props);
		this.state = {text: ""};
		this.name = "Land of Nod";
		this.pic = require('./assets/LandOfNodWine.jpg');
		this.phone = '860-824-5225';
		this.address = "99 Lower Road, East Canaan, CT 06024";
		this.info = 'Open April 1-Nov 4: Sat-Sun 11am-5pm. Also open Fridays from Memorial Day Weekend - Labor Day, Fri-Sun 11am-5pm. Closed Easter Sunday. Open Memorial Day & Labor Day 11am-5pm. The Land of Nod has the proud distinction of being recognized as a National Bicentennial Farm. It is one of the oldest working farms in Connecticut serving the community for over nine generations. The winery lays before the beautiful Canaan Mountain State Reserve Forest beside the Blackberry River. We planted our first vines in 1994 and opened as a production winery in 1998. The tasting room offers a wide selection of grape and fruit wines, from our traditional red and whites to fruity Raspberry, Blueberry-Raspberry Medley, Peach, Winter Pear, and Chocolate Raspberry. We encourage picnicking. See www.landofnodwinery.com for more info.';
		this.stamp = require('./assets/Stamp.png');
		this.noStamp = require('./assets/no-stamp.png');
	}
	componentDidMount() {
		AsyncStorage.getItem('Land').then((value) => {
		if (value !== null){
			// saved input is available
			this.setState({ text: value }); // Note: update state with last entered value
		}
		}).done();
}
	goToMap() {
		if (Platform.OS === 'ios') {
			Linking.openURL('http://maps.apple.com/?daddr=99+Lower+Road,East+Canaan,CT')
		}
		else {
			Linking.openURL('https://www.google.com/maps/dir/?api=1&destination=99+Lower+Road%2C+East+Canaan%2C+CT')
		}
	}
	displayStamp() {
		if (stamped[17]) {
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
						AsyncStorage.setItem('Land', text); // Note: persist input
					 }}
					value={this.state.text}
				/>
				{/*<Button title="View next Winery" onPress={() => navigate('Lebanon')}/>*/}
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