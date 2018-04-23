import React, {Component} from 'react';
import { AppRegistry, Alert, Button, Image, StyleSheet, Text, View, TextInput, Keyboard, Picker } from 'react-native';
import { StackNavigator } from 'react-navigation';


//Winery Review 1-10
//Wine of winery review 1-10
//Extra Description
	var name;
	var wineryRating;
	var wineRating;
	var description;
	var editWinery = false;
export default class reviewScreen extends Component {
	//constructor(wineryName, wineryRating, wineRating, descript) {
	//	super(props);
	///	this.state = {
	//		editWinery: false,
	//	};
	//}
	startEditing(varChange) {
		varChange = !varChange;
	}
	render() {
		const { navigate } = this.props.navigation;
		return(
			<View>
				<Button 
        		title= "Go back"
        		onPress={() => navigate('Home')}
        		/>
				<Text style ={{
					textAlign: 'center',
					marginTop: 15,
				}}>
				Winery Rating 1-10
				</Text>
				<Button
					title = "Rate W"
					onPress = {() => this.startEditing(this.editWinery) }
				/> 
				<Picker selectedValue = {this.wineryRating}
						enabled = {true}
				>
					<Picker.Item label = "0" value = {0} />
					<Picker.Item label = "1" value = {1} />
					<Picker.Item label = "2" value = {2} />
					<Picker.Item label = "3" value = {3} />
					<Picker.Item label = "4" value = {4} />
					<Picker.Item label = "5" value = {5} />
					<Picker.Item label = "6" value = {6} />
					<Picker.Item label = "7" value = {7} />
					<Picker.Item label = "8" value = {8} />
					<Picker.Item label = "9" value = {9} />
					<Picker.Item label = "10" value = {10} />
				</Picker>

				<Text style = {{
					textAlign: 'center',
					marginTop: 10,
				}}>
				Rate the Wine:
				</Text>
				<TextInput
					keyboardType = 'numeric'
					onChangeText={(text) => this.wineRating}
					value={this.wineRating}
				/>
				<Text
					style = {{
						textAlign: 'center',
					}}
				>
				Other Notes:
				</Text>
				<TextInput
					style={{
						borderLeftWidth: 50,
						borderRightWidth: 50,
					}}
					multiline = {true}
					onChangeText={(text) => this.description}
					value={this.description}
				/>
			</View>

		)
	}
	
}