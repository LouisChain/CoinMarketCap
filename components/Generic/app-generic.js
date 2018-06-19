import React, { Component } from "react";
import { View, Text, ActivityIndicator, TextInput } from "react-native";
import { PRIMARY_COLOR } from "../../styles/common";
import styles from "./styles";

export class ListItemSeperator extends Component {
  render() {
    return <Text style={{ backgroundColor: "#c0c0c0", height: 0.5 }} />;
  }
}

export class AppActivityIndicatorFullScreen extends Component {
  render() {
    return (
      <ActivityIndicator
        style={styles.indicator}
        size="large"
        color={PRIMARY_COLOR}
      />
    );
  }
}

export class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  handleChangeText(text) {
    this.setState({ text: text });
    this.props.handleSearBoxChange(text);
  }

  render() {
    return (
      <View style={styles.searchBoxContainer}>
        <TextInput
          underlineColorAndroid={"transparent"}
          placeholder="Type text here"
          onChangeText={text => this.handleChangeText(text)}
          value={this.state.text}
          style={styles.searchBoxInput}
        />
      </View>
    );
  }
}
