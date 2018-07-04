import React from "react";
import { View, ScrollView, Text } from "react-native";
import styles from "./styles-detail";
import TimeUtil from "../../utils/time-util";
import StringUtil from "../../utils/string-util";
import { AreaChart, YAxis, XAxis } from "react-native-svg-charts";
import * as shape from "d3-shape";
import Api from "../../services/api";
import SegmentControl from "../../components/Segment/segment-index";
import { AppActivityIndicatorFullScreen } from "../../components/Generic/app-generic";

export default class CoinDetail extends React.PureComponent {
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
    console.log("constructor\n");
    super(props);
    this.state = {
      chartData: [],
      chartTime: [],
      isLoading: true,
      selectedIndex: 0
    };
  }

  componentDidMount() {
    console.log("componentDidMount\n");
    let symbol = this.props.navigation.getParam("symbol", "BTC");
    return this.handleLoadChartByInput("1day", symbol);
  }

  getSnapshotBeforeUpdate(){
    console.log("getSnapshotBeforeUpdate\n");
    return null;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate\n");
  }

  componentWillUnmount(){
    console.log("componentWillUnmount\n");
  }

  handleLoadChartByIndex = index => {
    if (index === this.state.selectedIndex || this.state.isLoading) {
      return;
    }
    this.setState({
      isLoading: true,
      selectedIndex: index
    });
    let symbol = this.props.navigation.getParam("symbol", "BTC");
    switch (index) {
      case 0:
        this.handleLoadChartByInput("1day", symbol);
        break;
      case 1:
        this.handleLoadChartByInput("7day", symbol);
        break;
      case 2:
        this.handleLoadChartByInput("30day", symbol);
        break;
      case 3:
        this.handleLoadChartByInput("90day", symbol);
        break;
      case 4:
        this.handleLoadChartByInput("180day", symbol);
        break;
      case 5:
        this.handleLoadChartByInput("365day", symbol);
        break;
      case 6:
        this.handleLoadChartByInput(null, symbol);
        break;
    }
  };

  handleLoadChartByInput = (period, symbol) => {
    return Api.getHistoricalData(period, symbol.toUpperCase())
      .then(response => {
        let data = response.data.price;
        let result = [];
        let time = [];
        for (var i = 0; i < data.length; i++) {
          result.push(data[i][1]);
          // let t = TimeUtil.toHours(data[i][0]);
          // console.log(t);
          time.push(data[i][0]);
        }
        this.setState({
          isLoading: false,
          chartData: result,
          chartTime: time
        });
      })
      .catch(error => {
        console.log(error);
        // Handle error;
      });
  };

  render() {
    console.log("render\n");
    let params = this.props.navigation.state.params;
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
        <View style={{ height: 250, marginBottom: 16 }}>
          {this.state.isLoading ? (
            <AppActivityIndicatorFullScreen />
          ) : (
            <View style={{ height: 250, flexDirection: "column" }}>
              <View style={{ height: 250, flexDirection: "row" }}>
                <YAxis
                  style={{ width: 50 }}
                  data={this.state.chartData}
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
                  data={this.state.chartData}
                  contentInset={{ top: 16, bottom: 16 }}
                  curve={shape.curveNatural}
                  svg={{ fill: "rgba(0,124,95,0.5)" }}
                  animate={true}
                  animationDuration={500}
                />
              </View>
              <XAxis
                style={{ marginTop: 2, marginLeft: 50 }}
                data={this.state.chartTime}
                formatLabel={(value, index) => index}
                contentInset={{ left: 4, right: 1 }}
                numberOfTicks={8}
                svg={{ fontSize: 10, fill: "#bfbfbf" }}
              />
            </View>
          )}
        </View>
        {/* Selection view */}
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
            selectedIndex: 0
          }}
          onSegmentClick={index => this.handleLoadChartByIndex(index)}
        />
        {/* BottomView */}
        <View />
      </ScrollView>
    );
  }
}
