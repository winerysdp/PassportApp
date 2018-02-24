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
}

var name = "Rosedale Farms and Vineyards";
var address = "25 East Weatogue Street, Simsbury, CT 06070";
var description = "Since 1920, Rosedale has been growing a wide variety of fruits & vegetables, famous for our gourmet sweet corn, heirloom tomatoes and fresh flowers. Since 2000, our vineyard was planted and is now in its 12th vintage. Featuring our award winning wine: Lou’s Red, Farmington River Red, Simsbury Celebration and Three Sisters among other varieties as well. Although NO OUTSIDE FOOD is allowed, we offer farm fresh produce as well as local artisan breads, cheese, crackers and other snack items. We also have desserts: local pies, cookies and bars.";
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
				<Text style = {{fontSize: 12, color: '#14487a', textAlign: 'center'}}> {this.state.wine.address} </Text>
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
					onPress={()=>navigate('Saltwater')}
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