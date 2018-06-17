/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, Text, View, Button, Alert } from "react-native";
import styles from "../styles/styles";
import LearnTouchable from "../components/learns/learn_touchable";
import IScrolledDownAndWhatHappenedNextShockedMe from "../components/learns/scroll_view";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  _onPressButton() {
    Alert.alert("You tapped the button!");
  }

  handlePress1() {
    Alert.alert("Handle Press1");
  }

  handlePress2() {
    Alert.alert("Handle Press2");
  }

  render() {
    return (
      <View style={styles.container}>
        <LearnTouchable handlePress1={this.handlePress1} handlePress2={this.handlePress2}/>
        <IScrolledDownAndWhatHappenedNextShockedMe/>
      </View>
    );
  }
}
