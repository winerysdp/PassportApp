import React, {Component} from 'react';
import { AppRegistry, Alert, Button, Image, StyleSheet, Text, View, TextInput, Keyboard } from 'react-native';
import { StackNavigator } from 'react-navigation';

class product {
	constructor(name, picture, rate) {
		this.name = name;
		this.pic = picture;
		this.rating = rate;
	}
}

var firstWine = new product("Firstwine", require('./pictures/wine1.jpg'), 2);
var otherWine = new product("Otherwine", require('./pictures/wine2.jpg'), 5);

export default class productScreen extends Component {
constructor(props) {
		super(props);
		this.state = {wine: otherWine,};
	}
	changeProduct() {
		if (this.state.wine == otherWine) {
			this.setState({
				wine: firstWine
			});
		} else {
			this.setState({wine: otherWine});
		}
	}
	render() {
		return(
			<View>
				<View style = {{
					alignItems: 'center',
				}}>
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
				>
				</Image>
				<Text style = {{fontSize: 18}}> {this.state.wine.name} </Text>
				<Text style = {{fontSize: 12}}> {this.state.wine.rating} /5 </Text>
				</View>
				<Button
					title="View other products"
					onPress={()=>this.changeProduct()}/>

			</View>
		);
	}
}
