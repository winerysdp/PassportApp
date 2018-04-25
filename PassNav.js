import React, {Component} from 'react';
import { AppRegistry, Alert, Button, Image, StyleSheet, Text, View, TextInput, Keyboard, ScrollView, TouchableOpacity, AsyncStorage } from 'react-native';
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
		<Button
				style={styles.button}
				onPress={() => navigate('QRScanner')}
				title="QR Scanner"
				/>
		<Button
				style={styles.button}
				onPress={() => navigate('ProfilePage')}
				title="Profile"
				/>
		<Button 
				style={styles.button}
				onPress={() => AsyncStorage.setItem('stamped', JSON.stringify(false))}
				title="Reset stamps"
				/>
		<Text style={{fontSize: 16, textAlign: 'center', color: '#4b85bc'}}> Click on winery names below to navigate to corresponding Winery pages </Text>
		<View style={styles.row}>
			<Image
				source={require('./assets/Arrigoni.png')}
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
			
			

		</View>
		<View style = {styles.row}>
				<Button
					style={styles.button}
					onPress={() => navigate('Brignole')}
					title="Brignole Vineyards"
				/>
		
		</View>		
		
		<View style={styles.row}>
			<Image 
				source={require('./assets/CassidyHill.jpg')}
				style={styles.navImage}
			/>
			
			

		</View>
		<View style = {styles.row}>
				<Button
					style={styles.button}
					onPress={() => navigate('Cassidy')}
					title="Cassidy Hill Vineyards"
				/>
		
		</View>	
		
		<View style={styles.row}>
			<Image 
				source={require('./assets/Chamard.png')}
				style={styles.navImage}
			/>
			
			

		</View>
		<View style = {styles.row}>
				<Button
					style={styles.button}
					onPress={() => navigate('Chamard')}
					title="Chamard Vineyards"
				/>
		
		</View>	
		<View style={styles.row}>
			<Image 
				source={require('./assets/Chateau.png')}
				style={styles.navImage}
			/>
			
			

		</View>
		<View style = {styles.row}>
				<Button
					style={styles.button}
					onPress={() => navigate('Chateau')}
					title="Chateau Le' Gari'"
				/>
		
		</View>
		<View style={styles.row}>
			<Image 
				source={require('./assets/CTValley.jpg')}
				style={styles.navImage}
			/>
			
			

		</View>
		<View style = {styles.row}>
				<Button
					style={styles.button}
					onPress={() => navigate('CTValley')}
					title="CT Valley Winery, LLC"
				/>
		
		</View>			

		<View style={styles.row}>
			<Image 
				source={require('./assets/Dalice.jpg')}
				style={styles.navImage}
			/>
			
			

		</View>
		<View style = {styles.row}>
				<Button
					style={styles.button}
					onPress={() => navigate('Dalice')}
					title="Dalice Elizabeth Winery"
				/>
		
		</View>	
		
		<View style={styles.row}>
			<Image 
				source={require('./assets/DiGrazia.jpg')}
				style={styles.navImage}
			/>
			
			

		</View>
		<View style = {styles.row}>
				<Button
					style={styles.button}
					onPress={() => navigate('DiGrazia')}
					title="DiGrazia Vineyards"
				/>
		
		</View>			
		
		<View style={styles.row}>
			<Image 
				source={require('./assets/Gouveia.png')}
				style={styles.navImage}
			/>
			
			

		</View>
		<View style = {styles.row}>
				<Button
					style={styles.button}
					onPress={() => navigate('Gouveia')}
					title="Gouveia Vineyards"
				/>
		
		</View>			
		
		<View style={styles.row}>
			<Image 
				source={require('./assets/Haight.jpg')}
				style={styles.navImage}
			/>
			
			

		</View>
		<View style = {styles.row}>
				<Button
					style={styles.button}
					onPress={() => navigate('Haight')}
					title="Haight-Brown Vineyard"
				/>
		
		</View>	
		
		<View style={styles.row}>
			<Image 
				source={require('./assets/HawkRidge.png')}
				style={styles.navImage}
			/>
			
			

		</View>
		<View style = {styles.row}>
				<Button
					style={styles.button}
					onPress={() => navigate('Hawk')}
					title="Hawk Ridge Winery"
				/>
		
		</View>	
				<View style={styles.row}>
			<Image 
				source={require('./assets/Heartstone.jpg')}
				style={styles.navImage}
			/>
			
			

		</View>
		<View style = {styles.row}>
				<Button
					style={styles.button}
					onPress={() => navigate('Heartstone')}
					title="Heartstone Farm and Winery"
				/>
		
		</View>
				<View style={styles.row}>
			<Image 
				source={require('./assets/Hillyland.jpg')}
				style={styles.navImage}
			/>
			
			

		</View>
		<View style = {styles.row}>
				<Button
					style={styles.button}
					onPress={() => navigate('Hillyland')}
					title="The Vineyard at Hillyland"
				/>
		
		</View>
		
		<View style={styles.row}>
			<Image 
				source={require('./assets/Holmberg.png')}
				style={styles.navImage}
			/>
			
			

		</View>
		<View style = {styles.row}>
				<Button
					style={styles.button}
					onPress={() => navigate('Holmberg')}
					title="Holmberg Orchard and Winery"
				/>
		
		</View>	

		<View style={styles.row}>
			<Image 
				source={require('./assets/Hopkins.png')}
				style={styles.navImage}
			/>
			
			

		</View>
		<View style = {styles.row}>
				<Button
					style={styles.button}
					onPress={() => navigate('Hopkins')}
					title="Hopkins Vineyard, LLC"
				/>
		
		</View>	

		<View style={styles.row}>
			<Image 
				source={require('./assets/Jerram.jpg')}
				style={styles.navImage}
			/>
			
			

		</View>
		<View style = {styles.row}>
				<Button
					style={styles.button}
					onPress={() => navigate('Jerram')}
					title="Jerram Winery"
				/>
		
		</View>			
		
		<View style={styles.row}>
			<Image 
				source={require('./assets/JonathanEdwards.png')}
				style={styles.navImage}
			/>
			
			

		</View>
		<View style = {styles.row}>
				<Button
					style={styles.button}
					onPress={() => navigate('Jonathan')}
					title="Jonathan Edwards Winery"
				/>
		
		</View>			
		
		<View style={styles.row}>
			<Image 
				source={require('./assets/Jones.png')}
				style={styles.navImage}
			/>
			
			

		</View>
		<View style = {styles.row}>
				<Button
					style={styles.button}
					onPress={() => navigate('Jones')}
					title="Jones Winery"
				/>
		
		</View>			
		
		<View style={styles.row}>
			<Image 
				source={require('./assets/LandOfNod.jpg')}
				style={styles.navImage}
			/>
			
			

		</View>
		<View style = {styles.row}>
				<Button
					style={styles.button}
					onPress={() => navigate('Land')}
					title="Land of Nod Winery"
				/>
		
		</View>	

		<View style={styles.row}>
			<Image 
				source={require('./assets/Lebanon.jpg')}
				style={styles.navImage}
			/>
			
			

		</View>
		<View style = {styles.row}>
				<Button
					style={styles.button}
					onPress={() => navigate('Lebanon')}
					title="Lebanon Green Vineyards"
				/>
		
		</View>			
		
		<View style={styles.row}>
			<Image 
				source={require('./assets/LostAcres.jpg')}
				style={styles.navImage}
			/>
			
			

		</View>
		<View style = {styles.row}>
				<Button
					style={styles.button}
					onPress={() => navigate('Lost')}
					title="Lost Acres Vineyards"
				/>
		
		</View>			

		<View style={styles.row}>
			<Image 
				source={require('./assets/Maugle.jpg')}
				style={styles.navImage}
			/>
			
			

		</View>
		<View style = {styles.row}>
				<Button
					style={styles.button}
					onPress={() => navigate('Maugle')}
					title="Maugle Sierra Vineyards"
				/>
		
		</View>	
		
		<View style={styles.row}>
			<Image 
				source={require('./assets/Miranda.jpg')}
				style={styles.navImage}
			/>
			
			

		</View>
		<View style = {styles.row}>
				<Button
					style={styles.button}
					onPress={() => navigate('Miranda')}
					title="Miranda Vineyard"
				/>
		
		</View>			
		
		<View style={styles.row}>
			<Image 
				source={require('./assets/ParadiseHills.jpg')}
				style={styles.navImage}
			/>
			
			

		</View>
		<View style = {styles.row}>
				<Button
					style={styles.button}
					onPress={() => navigate('Paradise')}
					title="Paradise Hills Vineyard and Winery"
				/>
		
		</View>			

		<View style={styles.row}>
			<Image 
				source={require('./assets/Preston.png')}
				style={styles.navImage}
			/>
			
			

		</View>
		<View style = {styles.row}>
				<Button
					style={styles.button}
					onPress={() => navigate('Preston')}
					title="Preston Ridge Vineyard"
				/>
		
		</View>	
		
		<View style={styles.row}>
			<Image 
				source={require('./assets/Priam.png')}
				style={styles.navImage}
			/>
			
			

		</View>
		<View style = {styles.row}>
				<Button
					style={styles.button}
					onPress={() => navigate('Priam')}
					title="Priam Vineyards"
				/>
		
		</View>			
		
		<View style={styles.row}>
			<Image 
				source={require('./assets/Rosabianca.png')}
				style={styles.navImage}
			/>
			
			

		</View>
		<View style = {styles.row}>
				<Button
					style={styles.button}
					onPress={() => navigate('Rosabianca')}
					title="Rosabianca Vineyards"
				/>
		
		</View>			
		
		<View style={styles.row}>
			<Image 
				source={require('./assets/Rosedale.jpg')}
				style={styles.navImage}
			/>
			
			

		</View>
		<View style = {styles.row}>
				<Button
					style={styles.button}
					onPress={() => navigate('Rosedale')}
					title="Rosedale Farms and Vineyards"
				/>
		
		</View>			
		
		<View style={styles.row}>
			<Image 
				source={require('./assets/Saltwater.png')}
				style={styles.navImage}
			/>
			
			

		</View>
		<View style = {styles.row}>
				<Button
					style={styles.button}
					onPress={() => navigate('Saltwater')}
					title="Saltwater Vineyards"
				/>
		
		</View>	

		<View style={styles.row}>
			<Image 
				source={require('./assets/Savino.jpg')}
				style={styles.navImage}
			/>
			
			

		</View>
		<View style = {styles.row}>
				<Button
					style={styles.button}
					onPress={() => navigate('Savino')}
					title="Savino Vineyards"
				/>
		
		</View>		
		
		<View style={styles.row}>
			<Image 
				source={require('./assets/SharpeHill.png')}
				style={styles.navImage}
			/>
			
			

		</View>
		<View style = {styles.row}>
				<Button
					style={styles.button}
					onPress={() => navigate('Sharpe')}
					title="Sharpe Hill Vineyard"
				/>
		
		</View>	

		<View style={styles.row}>
			<Image 
				source={require('./assets/Staehly.png')}
				style={styles.navImage}
			/>
			
			

		</View>
		<View style = {styles.row}>
				<Button
					style={styles.button}
					onPress={() => navigate('Staehly')}
					title="Staehly Farm Winery"
				/>
		
		</View>		

		<View style={styles.row}>
			<Image 
				source={require('./assets/Stonington.png')}
				style={styles.navImage}
			/>
			
			

		</View>
		<View style = {styles.row}>
				<Button
					style={styles.button}
					onPress={() => navigate('Stonington')}
					title="Stonington Vineyards"
				/>
		
		</View>			

		<View style={styles.row}>
			<Image 
				source={require('./assets/SunsetHill.jpg')}
				style={styles.navImage}
			/>
			
			

		</View>
		<View style = {styles.row}>
				<Button
					style={styles.button}
					onPress={() => navigate('SunsetHill')}
					title="Sunset Hill Vineyard, LLC"
				/>
		
		</View>	

		<View style={styles.row}>
			<Image 
				source={require('./assets/SunsetMeadow.png')}
				style={styles.navImage}
			/>
			
			

		</View>
		<View style = {styles.row}>
				<Button
					style={styles.button}
					onPress={() => navigate('SunsetMeadow')}
					title="Sunset Meadow Vineyards"
				/>
		
		</View>	
		
		<View style={styles.row}>
			<Image 
				source={require('./assets/TaylorBrooke.png')}
				style={styles.navImage}
			/>
			
			

		</View>
		<View style = {styles.row}>
				<Button
					style={styles.button}
					onPress={() => navigate('Taylor')}
					title="Taylor Brooke Winery"
				/>
		
		</View>			

		<View style={styles.row}>
			<Image 
				source={require('./assets/WalkerRoad.png')}
				style={styles.navImage}
			/>
			
			

		</View>
		<View style = {styles.row}>
				<Button
					style={styles.button}
					onPress={() => navigate('Walker')}
					title="Walker Road Vineyards"
				/>
		
		</View>	
		
		<View style={styles.row}>
			<Image 
				source={require('./assets/WhiteSilo.jpg')}
				style={styles.navImage}
			/>
			
			

		</View>
		<View style = {styles.row}>
				<Button
					style={styles.button}
					onPress={() => navigate('WhiteSilo')}
					title="White Silo Winery"
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
	resizeMode: 'stretch',
	width: 150,
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
