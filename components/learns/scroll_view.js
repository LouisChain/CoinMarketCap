import React, { Component } from "react";
import { ScrollView, Image, Text } from "react-native";

export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
  render() {
    const IMAGE = require("../../icon/react.png");
    return (
      <ScrollView
        style={{ flex: 1, alignSelf: 'stretch' }}
      >
        <Text style={{ fontSize: 32 }}>Scroll me plz</Text>
        <Image source={IMAGE} />
        <Image source={IMAGE} />
        <Image source={IMAGE} />
        <Image source={IMAGE} />
        <Image source={IMAGE} />
        <Text style={{ fontSize: 32 }}>If you like</Text>
        <Image source={IMAGE} />
        <Image source={IMAGE} />
        <Image source={IMAGE} />
        <Image source={IMAGE} />
        <Image source={IMAGE} />
        <Text style={{ fontSize: 32 }}>Scrolling down</Text>
        <Image source={IMAGE} />
        <Image source={IMAGE} />
        <Image source={IMAGE} />
        <Image source={IMAGE} />
        <Image source={IMAGE} />
        <Text style={{ fontSize: 32 }}>What's the best</Text>
        <Image source={IMAGE} />
        <Image source={IMAGE} />
        <Image source={IMAGE} />
        <Image source={IMAGE} />
        <Image source={IMAGE} />
        <Text style={{ fontSize: 32 }}>Framework around?</Text>
        <Image source={IMAGE} />
        <Image source={IMAGE} />
        <Image source={IMAGE} />
        <Image source={IMAGE} />
        <Image source={IMAGE} />
        <Text style={{ fontSize: 32 }}>React Native</Text>
      </ScrollView>
    );
  }
}
