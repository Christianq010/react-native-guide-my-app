import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {
  state = {
    placeName: ""
  };

  placeNameChanged = value => {
    this.setState({
      placeName: value
    })
  };
  
  render() {
    return (
      <View style={styles.container}>
        <Text>Some dumb shit</Text>
        <TextInput
            style={styles.input}
            placeholder="Enter some text"
            value={this.state.placeName} 
            onChangeText={this.placeNameChanged} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 300,
    borderColor: "black",
    borderWidth: 1
  }
});
