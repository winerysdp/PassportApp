import React, {Component} from 'react';
import { AppRegistry, Alert, Button, Image, StyleSheet, Text, View, TextInput, Keyboard, ScrollView, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class passNav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: 'Passport Inside',
		};
	}
	render() {
		const { navigate } = this.props.navigation;
	return (
	<View style={styles.book}>
		<ScrollView contentContainerStyle={styles.contentContainer}>
		<Text style={{fontSize: 30, fontWeight: 'bold', color: '#14487a', textAlign: 'center'}}> My Passport </Text>
		<Text style={{fontSize: 16, textAlign: 'center', color: '#4b85bc'}}> Click on winery names below to navigate to corresponding Winery pages </Text>
		<View style={styles.row}>
			<Image
				source={require('./assets/Arrigoni.png')}
				style={styles.navImage}
			/>
			
			
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style = {styles.row}>
			<Button
					style={styles.button}
					onPress={() => navigate('Arrigoni')}
					title="Arrigoni Winery"
				/>
		</View>
		
		<View style={styles.row}>
			<Image 
				source={require('./assets/Bethlehem.jpg')}
				style={styles.navImage}
			/>
			
			
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style = {styles.row}>
				<Button
					style={styles.button}
					onPress={() => navigate('Bethlehem')}
					title="Bethlehem Vineyard and Winery"
				/>
		</View>
		
		<View style={styles.row}>
			<Image 
				source={require('./assets/Bishops.jpg')}
				style={styles.navImage}
			/>
			
			
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style = {styles.row}>
				<Button
					style={styles.button}
					onPress={() => navigate('Bishops')}
					title="Bishop's Orchard Winery"
				/>
		
		</View>
		
		<View style={styles.row}>
			<Image 
				source={require('./assets/Brignole.jpg')}
				style={styles.navImage}
			/>
			
			
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style = {styles.row}>
				<Button
					style={styles.button}
					onPress={() => navigate('Brignole')}
					title="Brignole Vineyards"
				/>
		
		</View>		
		
		
		</ScrollView>
	</View>
	);
  }
}
const styles = StyleSheet.create({
  contentContainer: {
	paddingVertical: 20
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
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
  },
  button: {
	margin: 100,
	flexWrap: 'wrap',
	//backgroundColor: '#4b85bc',
	//color: '#eaefff',
	marginTop: 100,
	position: 'absolute',
	bottom: 0,
  },
});
