import React, { Component } from 'react';
import { AppRegistry, Alert, Linking, Dimensions, LayoutAnimation, Text, View, StatusBar, StyleSheet, TouchableOpacity, TouchableHighlight, Image} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { BarCodeScanner, Permissions } from 'expo';
import Arrigoni from './Arrigoni.js';

export default class qrScanner extends Component {
  state = {
    hasCameraPermission: null,
    lastScannedUrl: null,
  };

  componentDidMount() {
    this._requestCameraPermission();
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
    }
  };

  render() {
    return (
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

  _handlePressCancel = () => {
    this.setState({ lastScannedUrl: null });
  };
  jumpToWinery() {
    const { navigate } = this.props.navigation;
    Arrigoni.state.wine.stamped = true;
    navigate('Arrigoni');

  }

  _maybeRenderUrl = () => {
    const { navigate } = this.props.navigation;
    if (!this.state.lastScannedUrl) {
      return;
    }

    return (
      <View style = {styles.bottomBar}>
        <Text style = {{color: 'white', fontSize: 18,}}> Press to Stamp </Text>
        <TouchableHighlight 
        onPress = {() => this.jumpToWinery(0)}>
        <Image
          style={{
            resizeMode: 'contain',
            resizeMode: 'cover',
            width: 150,
            height: 150,
          }}
          source = {require('./assets/Stamp.png')}/>
        </TouchableHighlight>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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