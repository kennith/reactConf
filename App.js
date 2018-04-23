import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image,
  Button 
  } from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./img/react-logo.png')} />
        <Button title="Schedule" accessibilityLabel="Navigate to list of schedule."
          onPress={{}}
          color="navy"
        />
        <Button title="About" accessibilityLabel="Navigate to learn about this app." 
          color="royalblue"
          onPress={{}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'darkslategray'
  },
  hero: {
    flex: 1,
    paddingLeft: '10px',
  }
});
