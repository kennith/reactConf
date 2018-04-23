import React from 'react';
import {
	Image,
	StyleSheet,
	View,
	Text
} from 'react-native';


export default class About extends React.Component {
	static navigationOptions = {
		title: 'About',
	};

	render() {
		return (
			<View style={styles.container}>
				<Image 
					source={{uri: 'https://www.gravatar.com/avatar/261d876ad0b9c8c89367a31bb045584a?s=400'}}
					style={styles.developer}
				/>
				<Text style={styles.developerText}>Kennith Leung</Text>
				<Text style={styles.developerText}>Made Possible by</Text>
				<Text style={{}}>React Native</Text>
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
  developer: {
  	height: 80,
  	width: 80,
  },
  developerText: {
  	marginTop: 10,
  	marginBottom: 10,
  }
})

// export default About;