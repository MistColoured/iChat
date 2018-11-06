import React, { Component } from "react";
import { Text, TouchableHighlight, TextInput } from "react-native";

import styles from "./style";

export default class RevisionInputButton extends Component {
  state = {
    addMessageText: ""
  };
  render() {
    const { addMessageText } = this.state;
    const { handleAddMessage } = this.props;
    return (
      <TouchableHighlight
        style={styles.addRevisionButton}
        underlayColor={"#ffee00"}
      >
        <TextInput
          // maxLength={32}
          autoFocus={true}
          style={styles.revisionInput}
          placeholder={"I am placeholder text"}
          onBlur={() => handleAddMessage(addMessageText)}
          onChangeText={addMessageText => this.setState({ addMessageText })}
          value={addMessageText}
        />
      </TouchableHighlight>
    );
  }
}
