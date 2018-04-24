import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ActivityIndicator,
  FlatList,
  TouchableHighlight,
  } from 'react-native';

// Schedule URL: https://kennith.github.io/reactConf/schedule.json
import {
  StackNavigator,
} from 'react-navigation';

import ScheduleDetail from './ScheduleDetail';

const App = StackNavigator({
  ScheduleDetail: { screen: ScheduleDetail },
});

export default class Schedule extends React.Component {
	static navigationOptions = {
		title: 'Schedule',
	};

  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }

  componentDidMount() {
    return fetch('https://kennith.github.io/reactConf/schedule.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.schedule,
        }, function() {

        })
      })
      .catch((error) => {
        console.error(error);
      })
  }

  render() {
    const { navigate } = this.props.navigation;

    if(this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
        );
    }

    return (
      <View>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item, separators}) => <TouchableHighlight onPress={()=> { console.log('test'); navigate('ScheduleDetail', { id: item.id })}} underlayColor='skyblue'><Text style={styles.item}>{item.time} - {item.topic} {item.speaker}</Text></TouchableHighlight>}
          // renderItem={({item}) => <Text style={styles.item}>{item.time} - {item.topic} by {item.speaker}</Text>}
          keyExtractor={(item, index) => item.id}
          onPress={() => { console.log('pressed!')}}
        />
      </View>  
    );

    return (
    	<View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  thItem: {
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    padding: 20,
    borderStyle: 'solid',
    borderColor: '#000',
    borderBottomWidth: 1,
  }
})