import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default class FlatListBasic extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            { key: "Devin" },
            { key: "Jackson" },
            { key: "James" },
            { key: "Joel" },
            { key: "John" },
            { key: "Jillian" },
            { key: "Jimmy" },
            { key: "Julie" },
            { key: "1" },
            { key: "2" },
            { key: "3" },
            { key: "4" },
            { key: "5" },
            { key: "6" },
            { key: "7" },
            { key: "8" },
            { key: "9" },
            { key: "10" },
            { key: "31" },
            { key: "41" },
            { key: "51" },
            { key: "61" },
            { key: "71" },
            { key: "81" }
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
        //   keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});
