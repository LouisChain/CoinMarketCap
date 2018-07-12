import React from "react";
import { View, ScrollView, Text } from "react-native";
import styles from "./styles-detail";
import TimeUtil from "../../../utils/time-util";
import StringUtil from "../../../utils/string-util";
import { AreaChart, YAxis, XAxis } from "react-native-svg-charts";
import * as shape from "d3-shape";
import SegmentControl from "../../Segment/segment-index";
import { AppActivityIndicatorFullScreen } from "../../Generic/app-generic";

export default class CoinDetail extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      price,
      lastUpdate,
      change1h,
      change24h,
      change7d
    } = this.props.navigation.state.params;
    return (
      <ScrollView style={styles.container}>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: 16
          }}
        >
          <Text style={styles.textTitle}>
            {StringUtil.formatCurrency(price, "$")}
          </Text>
          <Text style={styles.timeStyle}>
            {TimeUtil.toLocalDateTime(lastUpdate)}
          </Text>
          <View style={[styles.rowFlexOnly, styles.changeLayout]}>
            <View style={styles.rowFlexOnly}>
              <Text style={styles.textSubtitle}>1h </Text>
              <Text
                style={change1h < 0 ? styles.textNegivie : styles.textPositive}
              >
                {change1h < 0 ? change1h + "%  " : "+" + change1h + "%  "}
              </Text>
            </View>
            <View style={styles.rowFlexOnly}>
              <Text style={styles.textSubtitle}>24h </Text>
              <Text
                style={change24h < 0 ? styles.textNegivie : styles.textPositive}
              >
                {change24h < 0 ? change24h + "%  " : "+" + change24h + "%  "}
              </Text>
            </View>
            <View style={styles.rowFlexOnly}>
              <Text style={styles.textSubtitle}>7d </Text>
              <Text
                style={change7d < 0 ? styles.textNegivie : styles.textPositive}
              >
                {change7d < 0 ? change7d + "%" : "+" + change7d + "%"}
              </Text>
            </View>
          </View>
        </View>
        {/* Chart view */}
        <View style={{ height: 250, marginBottom: 16 }}>
          {this.getChartView()}
        </View>
        {/* Selection view */}
        {this.getSegmentView()}
        {/* BottomView */}
        <View />
      </ScrollView>
    );
  }

  getChartView = () => {
    if (this.props.isLoading) {
      return <AppActivityIndicatorFullScreen />;
    } else {
      return (
        <View style={{ height: 250, flexDirection: "column" }}>
          <View style={{ height: 250, flexDirection: "row" }}>
            <YAxis
              style={{ width: 50 }}
              data={this.props.chartData}
              contentInset={{ top: 1, bottom: 4 }}
              svg={{
                fill: "#bfbfbf",
                fontSize: 10
              }}
              numberOfTicks={10}
              formatLabel={value => `$${value}`}
            />
            <AreaChart
              style={{ height: 250, flex: 1 }}
              data={this.props.chartData}
              contentInset={{ top: 16, bottom: 16 }}
              curve={shape.curveNatural}
              svg={{ fill: "rgba(0,124,95,0.5)" }}
              animate={true}
              animationDuration={500}
            />
          </View>
          <XAxis
            style={{ marginTop: 2, marginLeft: 50 }}
            data={this.props.chartTime}
            formatLabel={(value, index) => index}
            contentInset={{ left: 4, right: 1 }}
            numberOfTicks={8}
            svg={{ fontSize: 10, fill: "#bfbfbf" }}
          />
        </View>
      );
    }
  };

  getSegmentView = () => {
    return (
      <SegmentControl
        segmentProps={{
          count: 3,
          data: ["1D", "1W", "1M", "3M", "6M", "1Y", "All"],
          buttonStyle: {
            fontSize: 14,
            textActiveColor: "#bfbfbf",
            textInactiveColor: "#99074C"
          },
          inactiveColor: "#12151B",
          activeColor: "#99074C",
          borderColor: "#99074C",
          borderWidth: 0.5,
          selectedIndex: this.props.selectedIndex
        }}
        onSegmentClick={index =>
          this.props.onChartChange(
            index,
            this.props.navigation.getParam("symbol", "BTC")
          )
        }
      />
    );
  };
}
