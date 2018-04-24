import React, {Component} from 'react';
import { AppRegistry, Alert, Button, Image, StyleSheet, Text, View, TextInput, Keyboard, ScrollView, Picker  } from 'react-native';
const Item = Picker.Item;
import { StackNavigator } from 'react-navigation';

var submitState = true;
global.phoneNumber = '';
global.sState = false;


export default class ProfilePage extends Component {
	constructor(props) {
		super(props);
		this.state = { firstName: ' ', lastName: ' ', month: '1', day: '1', year: '2018', phone: ' ' };
		
  }


	render() {
		const { navigate } = this.props.navigation;
		 _submit= () => {
			//const { navigate } = this.props.navigation;
			fetch('http://sdp-winerypassport.cse.uconn.edu/users/add', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					fname: this.state.firstName,
					lname: this.state.lastName,
					phone: this.state.phone,
					month: this.state.month,
					day: this.state.day,
					year: this.state.year
				})
			})
			.then((response) => response.json())
			.then((responseJson) => {
				return response.response;
			})
			.catch((error) => {
				console.error(error);
			});
			
			submitState = true;
			sState = true;
			navigate('PassNav');
		}
		return(
			<View style={styles.book}>
			<ScrollView contentContainerStyle={styles.contentContainer}>
				<View style = {{
					alignItems: 'center',
				}}>
				<View style={styles.row}>
					<Text style = {{fontSize: 12, color: '#14487a', textAlign: 'center'}}> {"First Name"} </Text>
					<TextInput
						style={{height: 40, width: 150, borderColor: 'gray', backgroundColor: 'white', borderWidth: 1}}
						onChangeText={(text) => this.setState(previousState => {
								return { firstName: text };
						})}
						value={this.state.firstName}
					/>
				</View>
				<View style={styles.row}>
					<Text style = {{fontSize: 12, color: '#14487a', textAlign: 'center'}}> {"Last Name"} </Text>
					<TextInput
						style={{height: 40, width: 150, borderColor: 'gray', backgroundColor: 'white', borderWidth: 1}}
						onChangeText={(text) => this.setState(previousState => {
								return { lastName: text };
						})}
						value = {this.state.lastName}
					/>
				</View>
				<View style={styles.row}>
					<Text style = {{fontSize: 12, color: '#14487a', textAlign: 'center'}}> {"Date of Birth in MM/DD?YYYY form"} </Text>
				</View>
				<View style={styles.row}>
					<Picker
						selectedValue={this.state.month}
						style= {{height: 50, width: 100, marginBottom: 150}}
						mode= 'dropdown'
						onValueChange={(itemValue, itemIndex)=> this.setState(previousState => {
								return { month: itemValue };
						})}
						>
						<Picker.Item label='1' value='1' />
						<Picker.Item label='2' value='2' />
						<Picker.Item label='3' value='3' />
						<Picker.Item label='4' value='4' />
						<Picker.Item label='5' value='5' />
						<Picker.Item label='6' value='6' />
						<Picker.Item label='7' value='7' />
						<Picker.Item label='8' value='8' />
						<Picker.Item label='9' value='9' />
						<Picker.Item label='10' value='10' />
						<Picker.Item label='11' value='11' />
						<Picker.Item label='12' value='12' />

						
					</Picker>
					<Picker
						selectedValue={this.state.day}
						style= {{height: 50, width: 100, marginBottom: 150}}
						mode= 'dialog'
						onValueChange={(itemValue, itemIndex)=> this.setState(previousState => {
								return { day: itemValue };
						})}>
						<Picker.Item label='1' value='1' />
						<Picker.Item label='2' value='2' />
						<Picker.Item label='3' value='3' />
						<Picker.Item label='4' value='4' />
						<Picker.Item label='5' value='5' />
						<Picker.Item label='6' value='6' />
						<Picker.Item label='7' value='7' />
						<Picker.Item label='8' value='8' />
						<Picker.Item label='9' value='9' />
						<Picker.Item label='10' value='10' />
						<Picker.Item label='11' value='11' />
						<Picker.Item label='12' value='12' />
						<Picker.Item label='13' value='13' />
						<Picker.Item label='14' value='14' />
						<Picker.Item label='15' value='15' />
						<Picker.Item label='16' value='16' />
						<Picker.Item label='17' value='17' />
						<Picker.Item label='18' value='18' />
						<Picker.Item label='19' value='19' />
						<Picker.Item label='20' value='20' />
						<Picker.Item label='21' value='21' />
						<Picker.Item label='22' value='22' />
						<Picker.Item label='23' value='23' />
						<Picker.Item label='24' value='24' />
						<Picker.Item label='25' value='25' />
						<Picker.Item label='26' value='26' />
						<Picker.Item label='27' value='27' />
						<Picker.Item label='28' value='28' />
						<Picker.Item label='29' value='29' />
						<Picker.Item label='30' value='30' />
						<Picker.Item label='31' value='31' />
					</Picker>
					<Picker
						selectedValue={this.state.year}
						style= {{height: 50, width: 100, marginBottom: 150}}
						mode= 'dialog'
						onValueChange={(itemValue, itemIndex)=> this.setState(previousState => {
								return { year: itemValue };
						})}>
						<Picker.Item label='2018' value= '2018' />
						<Picker.Item label='2017' value= '2017' />
						<Picker.Item label='2016' value= '2016' />
						<Picker.Item label='2015' value= '2015' />
						<Picker.Item label='2014' value= '2014' />
						<Picker.Item label='2013' value= '2013' />
						<Picker.Item label='2012' value= '2012' />
						<Picker.Item label='2011' value= '2011' />
						<Picker.Item label='2010' value= '2010' />
						<Picker.Item label='2009' value= '2009' />
						<Picker.Item label='2008' value= '2008' />
						<Picker.Item label='2007' value= '2007' />
						<Picker.Item label='2006' value= '2006' />
						<Picker.Item label='2005' value= '2005' />
						<Picker.Item label='2004' value= '2004' />
						<Picker.Item label='2003' value= '2003' />
						<Picker.Item label='2002' value= '2002' />
						<Picker.Item label='2001' value= '2001' />
						<Picker.Item label='2000' value= '2000' />
						<Picker.Item label='1999' value= '1999' />
						<Picker.Item label='1998' value= '1998' />
						<Picker.Item label='1997' value= '1997' />
						<Picker.Item label='1996' value= '1996' />
						<Picker.Item label='1995' value= '1995' />
						<Picker.Item label='1994' value= '1994' />
						<Picker.Item label='1993' value= '1993' />
						<Picker.Item label='1992' value= '1992' />
						<Picker.Item label='1991' value= '1991' />
						<Picker.Item label='1990' value= '1990' />
						<Picker.Item label='1989' value= '1989' />
						<Picker.Item label='1988' value= '1988' />
						<Picker.Item label='1987' value= '1987' />
						<Picker.Item label='1986' value= '1986' />
						<Picker.Item label='1985' value= '1985' />
						<Picker.Item label='1984' value= '1984' />
						<Picker.Item label='1983' value= '1983' />
						<Picker.Item label='1982' value= '1982' />
						<Picker.Item label='1981' value= '1981' />
						<Picker.Item label='1980' value= '1980' />
						<Picker.Item label='1979' value= '1979' />
						<Picker.Item label='1978' value= '1978' />
						<Picker.Item label='1977' value= '1977' />
						<Picker.Item label='1976' value= '1976' />
						<Picker.Item label='1975' value= '1975' />
						<Picker.Item label='1974' value= '1974' />
						<Picker.Item label='1973' value= '1973' />
						<Picker.Item label='1972' value= '1972' />
						<Picker.Item label='1971' value= '1971' />
						<Picker.Item label='1970' value= '1970' />
						<Picker.Item label='1969' value= '1969' />
						<Picker.Item label='1968' value= '1968' />
						<Picker.Item label='1967' value= '1967' />
						<Picker.Item label='1966' value= '1966' />
						<Picker.Item label='1965' value= '1965' />
						<Picker.Item label='1964' value= '1964' />
						<Picker.Item label='1963' value= '1963' />
						<Picker.Item label='1962' value= '1962' />
						<Picker.Item label='1961' value= '1961' />
						<Picker.Item label='1960' value= '1960' />
						<Picker.Item label='1959' value= '1959' />
						<Picker.Item label='1958' value= '1958' />
						<Picker.Item label='1957' value= '1957' />
						<Picker.Item label='1956' value= '1956' />
						<Picker.Item label='1955' value= '1955' />
						<Picker.Item label='1954' value= '1954' />
						<Picker.Item label='1953' value= '1953' />
						<Picker.Item label='1952' value= '1952' />
						<Picker.Item label='1951' value= '1951' />
						<Picker.Item label='1950' value= '1950' />
						<Picker.Item label='1949' value= '1949' />
						<Picker.Item label='1948' value= '1948' />
						<Picker.Item label='1947' value= '1947' />
						<Picker.Item label='1946' value= '1946' />
						<Picker.Item label='1945' value= '1945' />
						<Picker.Item label='1944' value= '1944' />
						<Picker.Item label='1943' value= '1943' />
						<Picker.Item label='1942' value= '1942' />
						<Picker.Item label='1941' value= '1941' />
						<Picker.Item label='1940' value= '1940' />
						<Picker.Item label='1939' value= '1939' />
						<Picker.Item label='1938' value= '1938' />
						<Picker.Item label='1937' value= '1937' />
						<Picker.Item label='1936' value= '1936' />
						<Picker.Item label='1935' value= '1935' />
						<Picker.Item label='1934' value= '1934' />
						<Picker.Item label='1933' value= '1933' />
						<Picker.Item label='1932' value= '1932' />
						<Picker.Item label='1931' value= '1931' />
						<Picker.Item label='1930' value= '1930' />
						<Picker.Item label='1929' value= '1929' />
						<Picker.Item label='1928' value= '1928' />
						<Picker.Item label='1927' value= '1927' />
						<Picker.Item label='1926' value= '1926' />
						<Picker.Item label='1925' value= '1925' />
						<Picker.Item label='1924' value= '1924' />
						<Picker.Item label='1923' value= '1923' />
						<Picker.Item label='1922' value= '1922' />
						<Picker.Item label='1921' value= '1921' />
						<Picker.Item label='1920' value= '1920' />
						<Picker.Item label='1919' value= '1919' />

					</Picker>
				</View>
				<View style={styles.row}>
					<Text style = {{fontSize: 12, color: '#14487a', textAlign: 'center'}}> {"Phone Number for contact if you win"} </Text>
					<TextInput
						style={{height: 40, width: 150, borderColor: 'gray', backgroundColor: 'white', borderWidth: 1}}
							onChangeText={(text) => this.setState(previousState => {
								return { phone: text };
						})}
						phoneNumber={this.state.phone}
					/>
				</View>
				</View>
				
				
				<Button
					title='Submit'
					onPress={()=>_submit()}
				/>
				
				<Button
					title='Back to Main Menu'
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