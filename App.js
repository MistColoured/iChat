/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import db, { auth, provider, serverTimestamp } from "./components/firebase";
import InputButton from "./components/InputButton";

export default class App extends Component {
  state = {
    embedLevel: ""
  };

  handleAddMessage = addMessageText => {
    if (!addMessageText) {
      this.setState({
        showKeyboard: false
      });
      return;
    }
    const {
      // user: { uid },
      embedLevel
    } = this.state;
    db.collection(`MessageFirestore${embedLevel}`)
      .add({
        timestamp: serverTimestamp,
        message: addMessageText
      })
      // .then(() => this.loadMessageData(embedLevel))
      .then(() => console.log("Message added"))
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  };
  render() {
    return (
      <View style={styles.container}>
        <InputButton handleAddMessage={this.handleAddMessage} />
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
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
