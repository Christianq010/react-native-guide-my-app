import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

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
        <View style={styles.rowContainer}>
          <TextInput
              style={styles.input}
              placeholder="Enter some text"
              value={this.state.placeName} 
              onChangeText={this.placeNameChanged} 
          />
          <Button style={styles.button} title="Add" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 26,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowContainer: {
    // flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    flex: 1,
    width: "70%",
    borderColor: "black",
    borderWidth: 1
  },
  button : {
    width: "30%"
  }
});
