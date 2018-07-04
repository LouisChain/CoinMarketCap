import React, { Component } from "react";
import { View, TouchableNativeFeedback, Text, Alert } from "react-native";

export default class SegmentControl extends Component {
  constructor(props) {
    super(props);
    // props from outside:
    // segmentProps: count, data[string], buttonStyle{activeColor, inactiveColor, color, fontSize, border}, activeColor, onPress,
    this.state = {
      selectedIndex: this.props.segmentProps.selectedIndex,
      activeColor: this.props.segmentProps.activeColor,
      inactiveColor: this.props.segmentProps.inactiveColor,
      textActiveColor: this.props.segmentProps.buttonStyle.textActiveColor,
      textInactiveColor: this.props.segmentProps.buttonStyle.textInactiveColor
    };
  }

  getTextStyle = selected => {
    if (selected) {
      return {
        color: this.state.textActiveColor
      };
    } else {
      return {
        color: this.state.textInactiveColor
      };
    }
  };

  getButtonStyle = selected => {
    if (selected) {
      return {
        backgroundColor: this.state.activeColor
      };
    } else {
      return {
        backgroundColor: this.state.inactiveColor
      };
    }
  };

  handleClickSegment = index => {
    this.setState({ selectedIndex: index });
    this.props.onSegmentClick(index);
  };

  render() {
    let childViews = this.props.segmentProps.data.map((value, index, data) => (
      <TouchableNativeFeedback
        key={index}
        background={TouchableNativeFeedback.SelectableBackground()}
        onPress={() => this.handleClickSegment(index)}
      >
        <View
          style={[
            {
              flex: 1,
              alignItems: "center",
              borderColor: this.props.segmentProps.borderColor,
              borderWidth: this.props.segmentProps.borderWidth
            },
            this.getButtonStyle(this.state.selectedIndex === index)
          ]}
        > 
          <Text
            style={[
              {
                flex: 1,
                textAlignVertical: "center",
                fontSize: this.props.segmentProps.buttonStyle.fontSize,
                fontWeight: "bold"
              },
              this.getTextStyle(this.state.selectedIndex === index)
            ]}
          >
            {value}
          </Text>
        </View>
      </TouchableNativeFeedback>
    ));
    return (
      <View
        style={{
          flexDirection: "row",
          height: 40,
          borderWidth: this.props.segmentProps.borderWidth,
          borderColor: this.props.segmentProps.borderColor
        }}
      >
        {childViews}
      </View>
    );
  }
}
