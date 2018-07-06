import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "./styles-main";
import StringUtil from "../../../utils/string-util";
import TimeUtil from "../../../utils/time-util";
import { AppActivityIndicatorFullScreen } from "../../Generic/app-generic";
import { getGlobalData } from "../../../services/cloud/api";

export default class Global extends Component {
  static navigationOptions = {
    title: "Global Data"
  };

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      isLoading: true
    };
  }

  componentDidMount() {
    return getGlobalData()
      .then(response => {
        this.setState({
          isLoading: false,
          data: response.data.data
        });
      })
      .catch(error => {
        console.log(error);
        // Handle error here
      });
  }

  render() {
    if (this.state.isLoading) {
      return <AppActivityIndicatorFullScreen />;
    }
    return (
      <ScrollView style={[styles.container]}>
        <View style={styles.containerGlobal}>
          <Text style={styles.marketCap}>Total Market Cap</Text>
          <Text style={styles.marketCapNumber}>
            {StringUtil.formatCurrency(
              this.state.data.quotes.USD.total_market_cap,
              "$"
            )}
          </Text>
        </View>
        <View style={styles.containerGlobal2}>
          <View style={styles.rowOdd}>
            <Text style={styles.textCapLeft}>Total 24h Volume</Text>
            <Text style={styles.textCapRight}>
              {StringUtil.formatCurrency(
                this.state.data.quotes.USD.total_volume_24h,
                "$"
              )}
            </Text>
          </View>
          <View style={styles.rowEven}>
            <Text style={styles.textCapLeft}>Bitcoin Dominance</Text>
            <Text style={styles.textCapRight}>
              {this.state.data.bitcoin_percentage_of_market_cap}%
            </Text>
          </View>
          <View style={styles.rowOdd}>
            <Text style={styles.textCapLeft}>Active Currencies</Text>
            <Text style={styles.textCapRight}>
              {this.state.data.active_cryptocurrencies}
            </Text>
          </View>
          <View style={styles.rowEven}>
            <Text style={styles.textCapLeft}>Active Markets</Text>
            <Text style={styles.textCapRight}>
              {this.state.data.active_markets}
            </Text>
          </View>
          <View style={styles.rowOdd}>
            <Text style={styles.textCapLeft}>Last Time Update</Text>
            <Text style={[styles.textCapRight, styles.timeStyle]}>
              {TimeUtil.toLocalDateTime(this.state.data.last_updated)}
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}
