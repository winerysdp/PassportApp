import React, {Component} from 'react';
import { AppRegistry, Alert, Button, Image, StyleSheet, Text, View, TextInput, Keyboard, ScrollView, Picker  } from 'react-native';
const Item = Picker.Item;
import { StackNavigator } from 'react-navigation';

var submitState = true;
global.userId = 0;
global.sState = false;
var Rules = '1)	Contest runs May 4, 2018 to November 4, 2018\n2)	You must be at least 21 years of age to enter\n3)	Passport must have a minimum of 12 stamps (or more) to qualify\n4)	There is no purchase necessary to have your passport stamped.\n5)	You must personally present your passport to be stamped\n6)	Prize drawing to be held on December 6, 2018\n7)	Winner does not have to be present at drawing to win.\n8)	Winner will be notified by phone if they win.\n9)	Grand prizes must be taken on the dates listed, to the location specified.\n10)	Chauffered limousine must be taken to Connecticut wineries or festival only. Limo is for a maximum of eight people total on a Sunday. Taxes and gratuity will apply.\n11)	La Quinta overnights are based on availabilty and are valid for one year from the date they are awarded.\n12)	There is no cash value, substitution, or transfer of ownership of any prize in this contest.\n13)	Certificates for wine will be provided by participating wineries and will be assigned to winners at random.\n14)	Your passport may be disqualified if it is altered or embellished in any way.\n15)	Winners agree their names and images may be used in future advertisements and they will execute affidavit of eligibility and liability waiver.\n16)	One entry per person\n17)	The CT Farm Wine Development Council reserves the right to change or cancel this contest at any time.';
var Prizes = 'Have your passport stamped at least 35 locations and enter to win:\n 	Grand Prize #1: A two-week trip for two to Malaga, Spain, February 4-17, 2019. A 14-night stay (one room, double occupancy) at the Benalmadena Palace, Malaga, Spain. A four-star property with amazing views of the Mediterranean Sea. Roundtrip airfare for two (2) included. Transportation to and from the airport not included.\n\nIn addition, passports with at least 35 stamps will be entered into an additional prize drawing for a round trip chauffeured limousine to the Connecticut Wine Festival, Goshen, which includes up to eight entrance tickets.\n\nHave your passport stamped at 18 or more locations and enter to win:\nGrand Prize #2: A two-week trip for two to Malaga, Spain, February 18-March 4, 2019. A 14-night stay (one room, double occupancy) at the Benalmadena Palace, Malaga, Spain. A four-star property with amazing views of the Mediterranean Sea. Roundtrip airfare for two included. Transportation to and from the airport not included.\n\nAlso, passports with 18 or more stamps have additional chances to win: \nFirst Prize: A Gateway chauffeured limousine ride for eight people to Connecticut wineries. The first prize winner can select a Sunday of their choice to visit Connecticut wineries in grand, limousine style. Leave the driving to Gateway Limousine, Waterbury, from 10 a.m. to 6 p.m. on a Sunday afternoon of your choice, so you and your friends can relax and enjoy Connecticut wine.\n15 Second Prizes: One of 15 overnight getaways at La Quinta Inn and Suites, Danbury. An overnight getaway for two at La Quinta Inn and Suites in Danbury. One passport will be selected for each of the 15 overnights.\nThird Prize: A wine bangle bracelet and $50 gift card. Make the trip to pick up your delightful wine bangle bracelet prize and enjoy selecting something else. Compliments of Marie’s Jewelry, Waterbury.\n\nPassports with 12 or more stamps will be entered to win:\n40 Fourth Prizes: A certificate for two bottles of wine from one of 40 Connecticut wineries. 40 passports will be selected for each of the 40 certificates. Winery certificates will be awarded at random.';

export default class ProfilePage extends Component {
	constructor(props) {
		super(props);
		this.state = { firstName: '', lastName: '', month: '1', day: '1', year: '2018', phone: '' };
		
  }


	render() {
		const { navigate } = this.props.navigation;
		return(
			<View style={styles.book}>
			<ScrollView contentContainerStyle={styles.contentContainer}>
				<View style = {{
					alignItems: 'center',
				}}>
					<Button
						title='Back to Main Menu'
						onPress={()=>navigate('PassNav')}
					/>	
					<View style={styles.row}>
						<Text style = {{fontSize: 16, fontWeight: 'bold', color: '#14487a', textAlign: 'center'}}> {'Rules'} </Text>
					</View>
					<View style = {styles.row}>
						<Text style = {{fontSize: 12, color: '#14487a', textAlign: 'center'}}> {Rules} </Text>
					</View>
					<View style={styles.row}>
						<Text style = {{fontSize: 16, fontWeight: 'bold', color: '#14487a', textAlign: 'center'}}> {'\nPrizes'} </Text>
					</View>
					<View style = {styles.row}>
						<Text style = {{fontSize: 12, color: '#14487a', textAlign: 'center'}}> {Prizes} </Text>
					</View>
					<Button
						title='Back to Main Menu'
						onPress={()=>navigate('PassNav')}
					/>				
				</View>
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