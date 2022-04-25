import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";

export default class App extends Component {




  //Binding the function with class
  buttonClickListener = () => {
   var words = require('an-array-of-french-words')
   console.log(words)
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>
          React Native Button Onpress Event.
        </Text>

        <Button
          onPress={this.buttonClickListener}
          title="Click ME"
          color="#00B0FF"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  }
})