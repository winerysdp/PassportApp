import React, {Component} from 'react';
import { AppRegistry, Alert, Button, Image, StyleSheet, Text, View, TextInput, Keyboard } from 'react-native';
import { StackNavigator } from 'react-navigation';

class winery {
	constructor(name, picture, address, info) {
		this.name = name;
		this.pic = picture;
		this.address = address;
		this.info = info;
		this.stamp = require('./assets/no-stamp.png');
	}
}

var bobsWine = new winery("Bob's Winery", require('./assets/wine1.jpg'), "123 Made Up Street", "Bob's Winery is the best place to find red wines.");
var joesWine = new winery("Joe's Winery", require('./assets/wine2.jpg'), "321 Real Street", "Joe's Winery is the best place to find white wines.");

export default class wineryScreen extends Component {
constructor(props) {
		super(props);
		this.state = {wine: bobsWine,};
	}
	changeWinery() {
		if (this.state.wine == bobsWine) {
			this.setState({
				wine: joesWine
			});
		} else {
			this.setState({wine: bobsWine});
		}
	}
	render() {
		return(
			<View style={styles.book}>
				<View style = {{
					alignItems: 'center',
				}}>
				<Text style = {{fontSize: 32}}> {this.state.wine.name} </Text>
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
				<Text style = {{fontSize: 12}}> {this.state.wine.address} </Text>
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
				<Text style = {{fontSize: 12}}> {this.state.wine.info} </Text>
				</View>
				<Text style={{fontSize: 20, textAlign: 'center'}}>
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
					onPress={()=>this.changeWinery()}
				/>
			</View>
		);
	}
}
const styles = StyleSheet.create({
  book: {
    flex: 1,
    backgroundColor: '#ffebcd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navImage: {
	marginTop: 20,
	resizeMode: 'contain',
	resizeMode: 'cover',
	width: 125,
	height: 125,
  },
  row: {
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center',
  },
  button: {
	margin: 20,
	position: 'absolute',
	bottom: 0,
  },
});