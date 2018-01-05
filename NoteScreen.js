import React, {Component} from 'react';
import { AppRegistry, Alert, Button, Image, StyleSheet, Text, View, TextInput, Keyboard } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class noteScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: 'Enter Notes',
		};
	}
	render() {
		const { navigate } = this.props.navigation;
	return (
		<View>
        	<Text style={{fontSize: 20, textAlign: 'center'}}>
        		Notes
        	</Text>
        	<TextInput
				style={{
					marginLeft: 12,
					height: 200,
					fontSize: 15
				}}
				editable = {true}
				multiline = {true}
				numberofLines = {4}
				onChangeText={(text) => this.setState({text})}
				value={this.state.text}
			/>
     	</View>		
	);
  }
}