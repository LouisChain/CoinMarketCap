/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, Text, View, Button, Alert } from "react-native";
import styles from "../styles/styles";
import LearnTouchable from "../components/learns/learnTouchable";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

// type Props = {};
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
        <Text style={[styles.welcome, styles.bold]}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>

        <View style={styles.buttonContainer}>
          <Button onPress={this._onPressButton} title="Press Me" />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
            color="#841584"
          />
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button onPress={this._onPressButton} title="This looks great!" />
          <Button onPress={this._onPressButton} title="OK!" color="#841584" />
        </View>

        <LearnTouchable handlePress1={this.handlePress1} handlePress2={this.handlePress2}/>
      </View>
    );
  }
}
