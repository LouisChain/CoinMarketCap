import React, { Component } from "react";
import { View, Text, ActivityIndicator, TextInput, Button } from "react-native";
import Theme from "../../styles/theme";
import styles from "./styles";

export class ListItemSeperator extends Component {
  render() {
    return <Text style={{ backgroundColor: "#404040", height: 0.3 }} />;
  }
}

export class AppActivityIndicatorFullScreen extends Component {
  render() {
    return (
      <ActivityIndicator
        style={styles.centerScreen}
        size="large"
        color={Theme.color.PRIMARY_COLOR}
      />
    );
  }
}

export class AppErrorFetchData extends Component {
  render() {
    <View style={style.centerScreen}>
      <Text style={styles.text}>Opps! Something went wrong</Text>
      <Button value="Reload" onPress = {this.props.onReload}/>
    </View>;
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
