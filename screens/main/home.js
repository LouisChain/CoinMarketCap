import React, { Component } from "react";
import {
  Platform,
  Text,
  View,
  Image,
  FlatList,
  ActivityIndicator
} from "react-native";
import styles from "./styles";
import { getTickers } from "../../services/api";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    return getTickers()
      .then(response => {
        var arr = [];
        for (var prop in response.data.data) {
          arr.push(response.data.data[prop]);
        }
        this.setState({
          isLoading: false,
          dataSource: arr
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <Text style={{ color: "black" }}>
              {item.name}, {item.circulating_supply}
            </Text>
          )}
          keyExtractor={(item, index) => item.id.toString()}
        />
      </View>
    );
  }
}
