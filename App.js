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

import Schedule from './Schedule';
import ScheduleDetail from './ScheduleDetail';
import About from './About';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'reactConf',
  };

  render() {
    const { navigate } = this.props.navigation;
    
    return (
      <View style={styles.container}>
        <Image source={require('./img/react-logo.png')} />
        <Button title="Schedule" accessibilityLabel="Navigate to list of schedule."
          onPress={() => navigate('Schedule')}
          color="navy"
        />
        <Button title="About" accessibilityLabel="Navigate to learn about this app." 
          color="royalblue"
          onPress={() => navigate('About')}
        />
      </View>
    );    
  }
};

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Schedule: {
      screen: Schedule,
    },
    ScheduleDetail: {
      screen: ScheduleDetail,
    },
    About: {
      screen: About,
    }
  },
  {
    // initialRouteName: 'Home',
    initialRouteName: 'ScheduleDetail',
  }
);


export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
};

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
