import React, {Component} from 'react';
import { AppRegistry, Alert, Button, Image, StyleSheet, Text, View, TextInput, Keyboard } from 'react-native';
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
		<Text style={{fontSize: 30}}> My Passport </Text>
		<Text style={{fontSize: 14, textAlign: 'center'}}> Click on images below to navigate to corresponding Winery pages </Text>
		<View style={styles.row}>
			<Image 
				source={require('./assets/download.jpg')}
				style={styles.navImage}
			/>
			<Text style={{flex: 1, flexWrap: 'wrap'}}>Bob's Winery: Bob's Winery is a nice place to eat.</Text>
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style={styles.row}>
			<Image 
				source={require('./assets/download.jpg')}
				style={styles.navImage}
			/>
			<Text style={{flex: 1, flexWrap: 'wrap'}}>Bob's Winery: Bob's Winery is a nice place to eat.</Text>
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style={styles.row}>
			<Image 
				source={require('./assets/download.jpg')}
				style={styles.navImage}
			/>
			<Text style={{flex: 1, flexWrap: 'wrap'}}>Bob's Winery: Bob's Winery is a nice place to eat.</Text>
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style={styles.row}>
			<Image 
				source={require('./assets/download.jpg')}
				style={styles.navImage}
			/>
			<Text style={{flex: 1, flexWrap: 'wrap'}}>Bob's Winery: Bob's Winery is a nice place to eat.</Text>
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style={styles.row}>
			<Image 
				source={require('./assets/download.jpg')}
				style={styles.navImage}
			/>
			<Text style={{flex: 1, flexWrap: 'wrap'}}>Bob's Winery: Bob's Winery is a nice place to eat.</Text>
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style={styles.row}>
			<Image 
				source={require('./assets/download.jpg')}
				style={styles.navImage}
			/>
			<Text style={{flex: 1, flexWrap: 'wrap'}}>Bob's Winery: Bob's Winery is a nice place to eat.</Text>
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style={styles.row}>
			<Image 
				source={require('./assets/download.jpg')}
				style={styles.navImage}
			/>
			<Text style={{flex: 1, flexWrap: 'wrap'}}>Bob's Winery: Bob's Winery is a nice place to eat.</Text>
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style={styles.row}>
			<Image 
				source={require('./assets/download.jpg')}
				style={styles.navImage}
			/>
			<Text style={{flex: 1, flexWrap: 'wrap'}}>Bob's Winery: Bob's Winery is a nice place to eat.</Text>
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style={styles.row}>
			<Image 
				source={require('./assets/download.jpg')}
				style={styles.navImage}
			/>
			<Text style={{flex: 1, flexWrap: 'wrap'}}>Bob's Winery: Bob's Winery is a nice place to eat.</Text>
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style={styles.row}>
			<Image 
				source={require('./assets/download.jpg')}
				style={styles.navImage}
			/>
			<Text style={{flex: 1, flexWrap: 'wrap'}}>Bob's Winery: Bob's Winery is a nice place to eat.</Text>
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style={styles.row}>
			<Image 
				source={require('./assets/download.jpg')}
				style={styles.navImage}
			/>
			<Text style={{flex: 1, flexWrap: 'wrap'}}>Bob's Winery: Bob's Winery is a nice place to eat.</Text>
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style={styles.row}>
			<Image 
				source={require('./assets/download.jpg')}
				style={styles.navImage}
			/>
			<Text style={{flex: 1, flexWrap: 'wrap'}}>Bob's Winery: Bob's Winery is a nice place to eat.</Text>
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style={styles.row}>
			<Image 
				source={require('./assets/download.jpg')}
				style={styles.navImage}
			/>
			<Text style={{flex: 1, flexWrap: 'wrap'}}>Bob's Winery: Bob's Winery is a nice place to eat.</Text>
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style={styles.row}>
			<Image 
				source={require('./assets/download.jpg')}
				style={styles.navImage}
			/>
			<Text style={{flex: 1, flexWrap: 'wrap'}}>Bob's Winery: Bob's Winery is a nice place to eat.</Text>
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style={styles.row}>
			<Image 
				source={require('./assets/download.jpg')}
				style={styles.navImage}
			/>
			<Text style={{flex: 1, flexWrap: 'wrap'}}>Bob's Winery: Bob's Winery is a nice place to eat.</Text>
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style={styles.row}>
			<Image 
				source={require('./assets/download.jpg')}
				style={styles.navImage}
			/>
			<Text style={{flex: 1, flexWrap: 'wrap'}}>Bob's Winery: Bob's Winery is a nice place to eat.</Text>
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style={styles.row}>
			<Image 
				source={require('./assets/download.jpg')}
				style={styles.navImage}
			/>
			<Text style={{flex: 1, flexWrap: 'wrap'}}>Bob's Winery: Bob's Winery is a nice place to eat.</Text>
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style={styles.row}>
			<Image 
				source={require('./assets/download.jpg')}
				style={styles.navImage}
			/>
			<Text style={{flex: 1, flexWrap: 'wrap'}}>Bob's Winery: Bob's Winery is a nice place to eat.</Text>
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style={styles.row}>
			<Image 
				source={require('./assets/download.jpg')}
				style={styles.navImage}
			/>
			<Text style={{flex: 1, flexWrap: 'wrap'}}>Bob's Winery: Bob's Winery is a nice place to eat.</Text>
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style={styles.row}>
			<Image 
				source={require('./assets/download.jpg')}
				style={styles.navImage}
			/>
			<Text style={{flex: 1, flexWrap: 'wrap'}}>Bob's Winery: Bob's Winery is a nice place to eat.</Text>
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style={styles.row}>
			<Image 
				source={require('./assets/download.jpg')}
				style={styles.navImage}
			/>
			<Text style={{flex: 1, flexWrap: 'wrap'}}>Bob's Winery: Bob's Winery is a nice place to eat.</Text>
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style={styles.row}>
			<Image 
				source={require('./assets/download.jpg')}
				style={styles.navImage}
			/>
			<Text style={{flex: 1, flexWrap: 'wrap'}}>Bob's Winery: Bob's Winery is a nice place to eat.</Text>
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style={styles.row}>
			<Image 
				source={require('./assets/download.jpg')}
				style={styles.navImage}
			/>
			<Text style={{flex: 1, flexWrap: 'wrap'}}>Bob's Winery: Bob's Winery is a nice place to eat.</Text>
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style={styles.row}>
			<Image 
				source={require('./assets/download.jpg')}
				style={styles.navImage}
			/>
			<Text style={{flex: 1, flexWrap: 'wrap'}}>Bob's Winery: Bob's Winery is a nice place to eat.</Text>
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style={styles.row}>
			<Image 
				source={require('./assets/download.jpg')}
				style={styles.navImage}
			/>
			<Text style={{flex: 1, flexWrap: 'wrap'}}>Bob's Winery: Bob's Winery is a nice place to eat.</Text>
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style={styles.row}>
			<Image 
				source={require('./assets/download.jpg')}
				style={styles.navImage}
			/>
			<Text style={{flex: 1, flexWrap: 'wrap'}}>Bob's Winery: Bob's Winery is a nice place to eat.</Text>
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style={styles.row}>
			<Image 
				source={require('./assets/download.jpg')}
				style={styles.navImage}
			/>
			<Text style={{flex: 1, flexWrap: 'wrap'}}>Bob's Winery: Bob's Winery is a nice place to eat.</Text>
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style={styles.row}>
			<Image 
				source={require('./assets/download.jpg')}
				style={styles.navImage}
			/>
			<Text style={{flex: 1, flexWrap: 'wrap'}}>Bob's Winery: Bob's Winery is a nice place to eat.</Text>
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style={styles.row}>
			<Image 
				source={require('./assets/download.jpg')}
				style={styles.navImage}
			/>
			<Text style={{flex: 1, flexWrap: 'wrap'}}>Bob's Winery: Bob's Winery is a nice place to eat.</Text>
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style={styles.row}>
			<Image 
				source={require('./assets/download.jpg')}
				style={styles.navImage}
			/>
			<Text style={{flex: 1, flexWrap: 'wrap'}}>Bob's Winery: Bob's Winery is a nice place to eat.</Text>
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style={styles.row}>
			<Image 
				source={require('./assets/download.jpg')}
				style={styles.navImage}
			/>
			<Text style={{flex: 1, flexWrap: 'wrap'}}>Bob's Winery: Bob's Winery is a nice place to eat.</Text>
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style={styles.row}>
			<Image 
				source={require('./assets/download.jpg')}
				style={styles.navImage}
			/>
			<Text style={{flex: 1, flexWrap: 'wrap'}}>Bob's Winery: Bob's Winery is a nice place to eat.</Text>
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style={styles.row}>
			<Image 
				source={require('./assets/download.jpg')}
				style={styles.navImage}
			/>
			<Text style={{flex: 1, flexWrap: 'wrap'}}>Bob's Winery: Bob's Winery is a nice place to eat.</Text>
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style={styles.row}>
			<Image 
				source={require('./assets/download.jpg')}
				style={styles.navImage}
			/>
			<Text style={{flex: 1, flexWrap: 'wrap'}}>Bob's Winery: Bob's Winery is a nice place to eat.</Text>
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style={styles.row}>
			<Image 
				source={require('./assets/download.jpg')}
				style={styles.navImage}
			/>
			<Text style={{flex: 1, flexWrap: 'wrap'}}>Bob's Winery: Bob's Winery is a nice place to eat.</Text>
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style={styles.row}>
			<Image 
				source={require('./assets/download.jpg')}
				style={styles.navImage}
			/>
			<Text style={{flex: 1, flexWrap: 'wrap'}}>Bob's Winery: Bob's Winery is a nice place to eat.</Text>
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style={styles.row}>
			<Image 	
				source={require('./assets/download2.jpg')} 
				style={styles.navImage}
			/>
			<Text style={{flex: 1, flexWrap: 'wrap'}}>Joe's Winery: Joe's Winery has the best Port in CT!</Text>
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style={styles.button}>
			<Button
				title="Go to Winery Screen"
				onPress= {() => navigate('Winery')}
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
    backgroundColor: '#ffebcd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navImage: {
	marginTop: 20,
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
	margin: 20,
	position: 'absolute',
	bottom: 0,
  },
});