import React from 'react';
import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
var page=1;

export default class App extends React.Component {
	nextPage() {
		page=page+1;
	}
	previousPage() {
		page=page-1;
	}
  render() {
	while(page==1) {
	return (
	<View style={styles.cover}>
		<Text>Passport</Text>
		<View style={styles.button}>
			<Button
				title="Next Page"
				onPress= {nextPage()}
			/>
		</View>
	</View>
	);
	}
  
	while(page==2) {
	return (
	<View style={styles.book}>
		<View style={styles.row}>
			<Image source={require('./assets/download.jpg')} />
			<Text style={{flex: 1, flexWrap: 'wrap'}}>Bob's Winery: Bob's Winery is a nice place to eat.</Text>
		</View>
		<View style={styles.row}>
			<Image source={require('./assets/download2.jpg')} />
			<Text style={{flex: 1, flexWrap: 'wrap'}}>Joe's Winery: Joe's Winery has the best Port in CT!</Text>
		</View>
		<Text>This is a very basic skeleton of the passport, minus formatting and stamp functionality </Text>
		<View style={styles.button}>
			<Button
				onPress= {previousPage()}
				title="Previous Page"
			/>
		</View>
	</View>
	);
	}
  }
}
const styles = StyleSheet.create({
  cover: {
    flex: 1,
    backgroundColor: '#4863A0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  book: {
    flex: 1,
    backgroundColor: '#ffebcd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
	margin: 20,
  },
  row: {
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center',
  },
});
