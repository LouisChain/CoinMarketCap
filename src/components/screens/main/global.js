import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "./styles-main";
import StringUtil from "../../../utils/string-util";
import TimeUtil from "../../../utils/time-util";
import { AppActivityIndicatorFullScreen } from "../../Generic/app-generic";

export default class Global extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.isLoading) {
      return <AppActivityIndicatorFullScreen />;
    }
    const {
      active_cryptocurrencies,
      active_markets,
      bitcoin_percentage_of_market_cap,
      total_market_cap,
      total_volume_24h,
      last_updated
    } = this.props.global;
    return (
      <ScrollView style={[styles.container]}>
        <View style={styles.containerGlobal}>
          <Text style={styles.marketCap}>Total Market Cap</Text>
          <Text style={styles.marketCapNumber}>
            {StringUtil.formatCurrency(total_market_cap, "$")}
          </Text>
        </View>
        <View style={styles.containerGlobal2}>
          <View style={styles.rowOdd}>
            <Text style={styles.textCapLeft}>Total 24h Volume</Text>
            <Text style={styles.textCapRight}>
              {StringUtil.formatCurrency(total_volume_24h, "$")}
            </Text>
          </View>
          <View style={styles.rowEven}>
            <Text style={styles.textCapLeft}>Bitcoin Dominance</Text>
            <Text style={styles.textCapRight}>
              {bitcoin_percentage_of_market_cap}%
            </Text>
          </View>
          <View style={styles.rowOdd}>
            <Text style={styles.textCapLeft}>Active Currencies</Text>
            <Text style={styles.textCapRight}>{active_cryptocurrencies}</Text>
          </View>
          <View style={styles.rowEven}>
            <Text style={styles.textCapLeft}>Active Markets</Text>
            <Text style={styles.textCapRight}>{active_markets}</Text>
          </View>
          <View style={styles.rowOdd}>
            <Text style={styles.textCapLeft}>Last Time Update</Text>
            <Text style={[styles.textCapRight, styles.timeStyle]}>
              {TimeUtil.toLocalDateTime(last_updated)}
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}
