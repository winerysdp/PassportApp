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

var bobsWine = new winery("Arrigoni Winery", require('./assets/wine1.jpg'), "1287 Portland-Cobalt Road, Rte 66, Portland, CT 06480", "Arrigoni Winery is nestled in the fertile Connecticut River Valley, and offers visitors an indoor Tasting Room and seating area with 18 different wines, a relaxing sunset Patio, vineyard-side picnic area and covered/heated Pavilion. After a wine tasting, browse the extensive gift shop and enjoy live music and scenic views of the vineyard. Event space is available year-round for weddings, bridal showers, family reunions and more. Please contact Monica@arrigoniwinery.com to learn more. Bus parking and private event parking available. Visitors are encouraged to bring a picnic. No outside beverages allowed. Open year-round.");
var joesWine = new winery("Bishop's Orchards Winery", require('./assets/wine2.jpg'), "1355 Boston Post Road, Guilford, CT 06437", "Since 1871, six generations of Bishop's have been serving Connecticut with farm products. Specialty fruit wines created by Bishop’s use our apples, peaches, pears, strawberries, and raspberries. Since the winery’s inception in 2005, we have won over 318 +medals. Outdoor seating overlooking the orchard and prepared foods from our kitchen will add to your experience. We also offer a great selection of Connecticut Farm Wines! From dry to sweet, award–winning wines from other Farm Wineries complements our own wide selection. Our Farm Market, Farm Kitchen, Ice Cream, Pick Your Own and CSA provide you with a great ”local” experience.");

export default class wineryScreen extends Component {
constructor(props) {
		super(props);
		this.state = {wine: joesWine,};
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
					width: 300,
					height: 350
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
					onPress={()=>navigate('Brignole')}
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