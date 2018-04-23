import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ActivityIndicator,
  FlatList,
  } from 'react-native';

// Schedule URL: https://kennith.github.io/reactConf/schedule.json

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
          renderItem={({item}) => <Text style={styles.item}>{item.time} - {item.topic} by {item.speaker}</Text>}
          keyExtractor={(item, index) => item.id}
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