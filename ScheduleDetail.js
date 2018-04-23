import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ActivityIndicator,
  FlatList,
  Image,
  } from 'react-native';

import md5 from 'react-native-md5';

// Schedule URL: https://kennith.github.io/reactConf/schedule.json

export default class ScheduleDetail extends React.Component {
	static navigationOptions = {
		title: 'Schedule Detail',
	};

  constructor(props) {
    super(props);
    this.state = { isLoading: true }
    this.data =  {
      "id": "1",
      "time": "0800",
      "speaker": "Alice",
      "topic": "Keynote",
      "email": 'alice@reactjs.org',
    };
  }

  componentDidMount() {
    this.setState({isLoading: false});
    return;
    return fetch('https://kennith.github.io/reactConf/1.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.speaker,
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
      <View style={styles.container}>
        <Image 
          source={{uri: 'https://www.gravatar.com/avatar/'+md5.hex_md5(this.data.speaker)+'?s=400&d=robohash'}}
          style={styles.speakerPic}
        />
        <Text style={styles.speaker}>{this.data.speaker}</Text>
        <Text style={styles.topic}>{this.data.topic}</Text>
        <Text style={styles.time}>{this.data.time}</Text>
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
    marginTop: 10,
    // justifyContent: 'center',
  },
  speakerPic: {
    alignItems: 'center',
    borderWidth: 1,
    width: 80,
    height: 80,
  },
  speaker: {
    marginTop: 20,
    fontSize: 30,
  },
  topic: {
    marginTop: 10,
    fontSize: 20,
  },
  time: {
    marginTop: 5,
  }
})