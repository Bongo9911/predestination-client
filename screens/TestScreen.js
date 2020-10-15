import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity, Button, geoLocation } from 'react-native';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: 0,
      longitude: 0
    }
  }

  getLocation = () => {
    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      },
      (error) => {
        this.setState({ error: error.message })
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    )

  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="location" onPress={this.getLocation}></Button>
        <Text>Location: {this.state.latitude}, {this.state.longitude}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});