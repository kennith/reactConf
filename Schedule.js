import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image,
  Button 
  } from 'react-native';

// Schedule URL: https://kennith.github.io/reactConf/schedule.json

export default class Schedule extends React.Component {
	static navigationOptions = {
		title: 'Schedule',
	};

  render() {
    return (
    	<View>
	    	<Image source={require('./img/react-logo.png')} />
      </View>
    );
  }
}
