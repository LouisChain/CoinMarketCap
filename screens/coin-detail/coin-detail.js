import React, { Component } from "react";
import { Text } from "react-native";
import { View } from "native-base";
import styles from "./styles-detail";
import TimeUtil from "../../utils/time-util";
import StringUtil from "../../utils/string-util";
import { AreaChart, Grid } from "react-native-svg-charts";
import * as shape from "d3-shape";
import Api from "../../services/api";

export default class CoinDetail extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("name", "Detail")
      // headerRight: (
      //   <Button
      //     onPress={() => navigation.navigate("MODAL")}
      //     title="Info"
      //     color="#fff"
      //   />
      // ),
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      chartData: [50, 10, 40, 95, 85, 91, 35, 53, 24, 50]
    };
  }

  componentDidMount() {
    return Api.getHistoricalData("1day", "BTC")
      .then(response => {
        let data = response.price;
        let result = [];
        for (var i = 0; i < data.length; i += 12) {
          // the record every 5 mins a price, so we get 1hour a price
          result.push(data[i][1]);
        }
        this.setState({
          chartData: result
        });
      })
      .catch(error => {
        console.log(error);
        // Handle error;
      });
  }

  render() {
    let params = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: 16
          }}
        >
          <Text style={styles.textTitle}>
            {StringUtil.formatCurrency(params.price, "$")}
          </Text>
          <Text style={styles.timeStyle}>
            {TimeUtil.toLocalDateTime(params.lastUpdate)}
          </Text>
          <View style={[styles.rowFlexOnly, styles.changeLayout]}>
            <View style={styles.rowFlexOnly}>
              <Text style={styles.textSubtitle}>1h </Text>
              <Text
                style={
                  params.change1h < 0 ? styles.textNegivie : styles.textPositive
                }
              >
                {params.change1h < 0
                  ? params.change1h + "%  "
                  : "+" + params.change1h + "%  "}
              </Text>
            </View>
            <View style={styles.rowFlexOnly}>
              <Text style={styles.textSubtitle}>24h </Text>
              <Text
                style={
                  params.change24h < 0
                    ? styles.textNegivie
                    : styles.textPositive
                }
              >
                {params.change24h < 0
                  ? params.change24h + "%  "
                  : "+" + params.change24h + "%  "}
              </Text>
            </View>
            <View style={styles.rowFlexOnly}>
              <Text style={styles.textSubtitle}>7d </Text>
              <Text
                style={
                  params.change7d < 0 ? styles.textNegivie : styles.textPositive
                }
              >
                {params.change7d < 0
                  ? params.change7d + "%"
                  : "+" + params.change7d + "%"}
              </Text>
            </View>
          </View>
        </View>
        {/* Chart view */}
        <View>
          {/* <AreaChart
            style={{ height: 200 }}
            data={this.state.chartData}
            contentInset={{ top: 30, bottom: 30 }}
            curve={shape.curveNatural}
            svg={{ fill: "rgba(134, 65, 244, 0.8)" }}
          >
            <Grid />
          </AreaChart> */}
        </View>
        {/* Selection view */}
        <View />
      </View>
    );
  }
}
