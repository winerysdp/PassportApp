import React, { Component } from 'react';
import { AppRegistry, Alert, Linking, Dimensions, LayoutAnimation, Text, View, StatusBar, StyleSheet, TouchableOpacity, TouchableHighlight, Image, AsyncStorage, Button} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { BarCodeScanner, Permissions } from 'expo';
import {submitState, phoneNumber} from './ProfilePage.js';

var stamped = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
var qrCode;
var pos;
var dest;
var destId;
var stampImage;


export default class qrScanner extends Component {
  state = {
    hasCameraPermission: null,
    lastScannedUrl: null,
  };

  componentDidMount() {
    this._requestCameraPermission();
    //stamped = AsyncStorage.getItem('stamped', (value) => {JSON.parse(value)});
  }

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };

  _handleBarCodeRead = result => {
    if (result.data !== this.state.lastScannedUrl) {
      LayoutAnimation.spring();
      this.setState({ lastScannedUrl: result.data });
      qrCode = result.data;
    }
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex: 1,}}>
        <View style={{height: 60, backgroundColor: '#4863A0', }}>
            <Text style={{fontSize: 18, color: 'white', textAlign: 'center' }}> CT Winery Association </Text>
            <Button style={{fontSize: 12, color: 'white', }} color = 'white' title="Return to Navigation" onPress={()=>this.props.navigation.goBack()}/>
        </View>
        <View style={styles.container}>
        {this.state.hasCameraPermission === null
          ? <Text>Requesting for camera permission</Text>
          : this.state.hasCameraPermission === false
              ? <Text style={{ color: '#fff' }}>
                  Camera permission is not granted
                </Text>
              : <BarCodeScanner
                  onBarCodeRead={this._handleBarCodeRead}
                  style={{
                    height: Dimensions.get('window').height,
                    width: Dimensions.get('window').width,
                  }}
                />}

        {this._maybeRenderUrl()}

        <StatusBar hidden />
        </View>
      </View>
    );
  }

  _handlePressUrl = () => {
    Alert.alert(
      'Open this URL?',
      this.state.lastScannedUrl,
      [
        {
          text: 'Yes',
          onPress: () => navigate('Arrigoni'),
        },
        { text: 'No', onPress: () => {} },
      ],
      { cancellable: false }
    );
  };

_submit() {
	const { navigate } = this.props.navigation;
	if(sState){
		//Do the submit thing
		
    stamped[pos] = true;
    navigate(dest);
	}
	else{
		Alert.alert(
			'Profile needs to be set up first',
			'Do you want to go now?',
			[
			{text: 'Go Now',onPress: () => navigate('ProfilePage')},
			{text: 'Cancel', onPress: () => navigate('PassNav')},
			],
			{cancellable: false}
			
		);
	}
};
  
  _handlePressCancel = () => {
    this.setState({ lastScannedUrl: null });
  };
  
  

  getWineryStamp() {
    if (qrCode == '2018sdpArrigoni') {
      pos = 0;
      dest = 'Arrigoni';
	  destId = 1;
      stampImage = require('./assets/Stamp.png');
    }
    if (qrCode == '2018sdpBethlehem') {
      pos = 1;
      dest = 'Bethlehem';
      stampImage = require('./assets/Stamp.png');
    }
    if (qrCode == '2018sdpBishops') {
      pos = 2;
      dest = 'Bishops';
      stampImage = require('./assets/Stamp.png');
    }
    if (qrCode == '2018sdpBrignole') {
      pos = 3;
      dest = 'Brignole';
      stampImage = require('./assets/Stamp.png');
    }
    if (qrCode == '2018sdpCassidy') {
      pos = 4;
      dest = 'Cassidy';
      stampImage = require('./assets/Stamp.png');
    }
    if (qrCode == '2018sdpChamard') {
      pos = 5;
      dest = 'Chamard';
      stampImage = require('./assets/Stamp.png');
    }
    if (qrCode == '2018sdpCT Valley') {
      pos = 6;
      dest = 'CTValley';
      stampImage = require('./assets/Stamp.png');
    }
    if (qrCode == '2018sdpDalice') {
      pos = 7;
      dest = 'Dalice';
      stampImage = require('./assets/Stamp.png');
    }
    if (qrCode == '2018sdpDiGrazia') {
      pos = 8;
      dest = 'DiGrazia';
      stampImage = require('./assets/Stamp.png');
    }
    if (qrCode == '2018sdpGouveia') {
      pos = 9;
      dest = 'Gouveia';
      stampImage = require('./assets/Stamp.png');
    }
    if (qrCode == '2018sdpHaight') {
      pos = 10;
      dest = 'Haight';
      stampImage = require('./assets/Stamp.png');
    }
    if (qrCode == '2018sdpHawk') {
      pos = 11;
      dest = 'Hawk';
      stampImage = require('./assets/Stamp.png');
    }

    if (qrCode == '2018sdpHolmberg') {
      pos = 12;
      dest = 'Holmberg';
      stampImage = require('./assets/Stamp.png');
    }
    if (qrCode == '2018sdpHopkins') {
      pos = 13;
      dest = 'Hopkins';
      stampImage = require('./assets/Stamp.png');
    }
    if (qrCode == '2018sdpJerram') {
      pos = 14;
      dest = 'Jerram';
      stampImage = require('./assets/Stamp.png');
    }
    if (qrCode == '2018sdpJonathan') {
      pos = 15;
      dest = 'Jonathan';
      stampImage = require('./assets/Stamp.png');
    }
    if (qrCode == '2018sdpJones') {
      pos = 16;
      dest = 'Jones';
      stampImage = require('./assets/Stamp.png');
    }
    if (qrCode == '2018sdpLand') {
      pos = 17;
      dest = 'Land';
      stampImage = require('./assets/Stamp.png');
    }
    if (qrCode == '2018sdpLebanon') {
      pos = 18;
      dest = 'Lebanon';
      stampImage = require('./assets/Stamp.png');
    }
    if (qrCode == '2018sdpLost') {
      pos = 19;
      dest = 'Lost';
      stampImage = require('./assets/Stamp.png');
    }
    if (qrCode == '2018sdpMaugle') {
      pos = 20;
      dest = 'Maugle';
      stampImage = require('./assets/Stamp.png');
    }
    if (qrCode == '2018sdpMiranda') {
      pos = 21;
      dest = 'Miranda';
      stampImage = require('./assets/Stamp.png');
    }
    if (qrCode == '2018sdpParadise') {
      pos = 22;
      dest = 'Paradise';
      stampImage = require('./assets/Stamp.png');
    }
    if (qrCode == '2018sdpPreston') {
      pos = 23;
      dest = 'Preston';
      stampImage = require('./assets/Stamp.png');
    }
    if (qrCode == '2018sdpPriam') {
      pos = 24;
      dest = 'Priam';
      stampImage = require('./assets/Stamp.png');
    }
    if (qrCode == '2018sdpRosabianca') {
      pos = 25;
      dest = 'Rosabianca';
      stampImage = require('./assets/Stamp.png');
    }
    if (qrCode == '2018sdpRosedale') {
      pos = 26;
      dest = 'Rosedale';
      stampImage = require('./assets/Stamp.png');
    }
    if (qrCode == '2018sdpSaltwater') {
      pos = 27;
      dest = 'Saltwater';
      stampImage = require('./assets/Stamp.png');
    }
    if (qrCode == '2018sdpSavino') {
      pos = 28;
      dest = 'Savino';
      stampImage = require('./assets/Stamp.png');
    }
    if (qrCode == '2018sdpSharpe') {
      pos = 29;
      dest = 'Sharpe';
      stampImage = require('./assets/Stamp.png');
    }
    if (qrCode == '2018sdpStaehly') {
      pos = 30;
      dest = 'Staehly';
      stampImage = require('./assets/Stamp.png');
    }
    if (qrCode == '2018sdpStonington') {
      pos = 31;
      dest = 'Stonington';
      stampImage = require('./assets/Stamp.png');
    }
    if (qrCode == '2018sdpSunsetHill') {
      pos = 32;
      dest = 'SunsetHill';
      stampImage = require('./assets/Stamp.png');
    }
    if (qrCode == '2018sdpSunsetMeadow') {
      pos = 33;
      dest = 'SunsetMeadow';
      stampImage = require('./assets/Stamp.png');
    }
    if (qrCode == '2018sdpTaylor') {
      pos = 34;
      dest = 'Taylor';
      stampImage = require('./assets/Stamp.png');
    }
    if (qrCode == '2018sdpWalker') {
      pos = 35;
      dest = 'Walker';
      stampImage = require('./assets/Stamp.png');
    }
    if (qrCode == '2018sdpWhiteSilo') {
      pos = 36;
      dest = 'WhiteSilo';
      stampImage = require('./assets/Stamp.png');
    }
	if (qrCode == '2018sdpChateau') {
      pos = 37;
      dest = 'Chateau';
      stampImage = require('./assets/Stamp.png');
    }
	if (qrCode == '2018sdpHeartstone') {
      pos = 38;
      dest = 'Heartstone';
      stampImage = require('./assets/Stamp.png');
    }
	if (qrCode == '2018sdpHillyland') {
      pos = 39;
      dest = 'Hillyland';
      stampImage = require('./assets/Stamp.png');
    }
  }
  jumpToWinery() {
    
	this._submit();
  }

  _maybeRenderUrl = () => {
    const { navigate } = this.props.navigation;
    if (!this.state.lastScannedUrl) {
      return;
    }
    else {
      this.getWineryStamp();
      return (
        <View style = {styles.bottomBar}>
          <Text style = {{color: 'white', fontSize: 18,}}> Press to Stamp </Text>
          <TouchableHighlight 
            onPress = {() => this.jumpToWinery()}>
            <Image
              style={{
                resizeMode: 'contain',
                resizeMode: 'cover',
                width: 150,
                height: 150,
              }}
              source = {stampImage}/>
          </TouchableHighlight>
        </View>
      );
    }
  };
}
export {stamped};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  url: {
    flex: 1,
  },
  urlText: {
    color: '#fff',
    fontSize: 20,
  },
  cancelButton: {
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButtonText: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 18,
  },
});