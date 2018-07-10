import React, { Component } from "react";
import { Text, View, Image, FlatList, TouchableOpacity } from "react-native";
import { getTickers } from "../../../services/cloud/api";
import {
  AppActivityIndicatorFullScreen,
  ListItemSeperator,
  SearchBox,
  AppErrorFetchData
} from "../../Generic/app-generic";
import styles from "./styles-main";
import { COIN_DETAIL } from "../../../constants/screen";
import Icon from "react-native-vector-icons/FontAwesome";
import Theme from "../../../styles/theme";
import StringUtils from "../../../utils/string-util";

export default class Home extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   isLoading: true,
    //   dataSource: null
    // };
  }

  // componentDidMount() {
  //   return getTickers()
  //     .then(response => {
  //       // var arr = [];
  //       // for (var prop in response.data.data) {
  //       //   arr.push(response.data.data[prop]);
  //       // }
  //       this.setState({
  //         isLoading: false,
  //         dataSource: response.data.data
  //       });
  //       loadedTickers = this.state.dataSource;
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }

  componentWillUnmount() {
    loadedTickers = null;
  }

  handleItemPress = rowData => {
    this.props.navigation.navigate(COIN_DETAIL, rowData);
  };

  getItemLayout = (data, index) => {
    return {
      length: listItemHeight,
      offset: index * listItemHeight,
      index
    };
  };

  renderItem = rowData => {
    let item = {
      id: rowData.item.id,
      symbol: rowData.item.symbol,
      name: rowData.item.name,
      price: rowData.item.quotes.USD.price,
      marketCap: rowData.item.quotes.USD.market_cap,
      volume24h: rowData.item.quotes.USD.volume_24h,
      change1h: rowData.item.quotes.USD.percent_change_1h,
      change24h: rowData.item.quotes.USD.percent_change_24h,
      change7d: rowData.item.quotes.USD.percent_change_7d,
      lastUpdate: rowData.item.last_updated
    };
    return (
      <ListItem
        id={item.id}
        name={item.name}
        symbol={item.symbol}
        price={item.price}
        market_cap={item.marketCap}
        volume_24h={item.volume24h}
        percent_change_1h={item.change1h}
        percent_change_24h={item.change24h}
        percent_change_7d={item.change7d}
        onTouch={() => this.handleItemPress(item)}
      />
    );
  };

  handleSearBoxChange = e => {
    // Alert.alert(text);
    let text = e.toLowerCase();
    let filteredName = loadedTickers.filter(ticker => {
      return (
        ticker.name.toLowerCase().match(text) ||
        ticker.symbol.toLowerCase().match(text)
      );
    });

    // if no match and text is empty
    if (!text || text === "") {
      console.log("change state");
      this.setState({
        dataSource: loadedTickers
      });
    }
    // if no name matches to text output
    else if (!Array.isArray(filteredName) && !filteredName.length) {
      console.log("no matches");
      this.setState({
        dataSource: []
      });
    }
    // if name matches then display
    else if (Array.isArray(filteredName)) {
      console.log("items matches");
      this.setState({
        dataSource: filteredName
      });
    }
  };

  renderLoading = () => {
    if (this.props.isLoading) {
      return <AppActivityIndicatorFullScreen />;
    }
    return null;
  };

  renderError = () => {
    if (this.props.isError) {
      return <AppErrorFetchData />;
    }
    return null;
  };

  renderList = () => {
    if (!this.props.isLoading && !this.props.isError) {
      return (
        <FlatList
          data={this.props.cryptos}
          keyExtractor={item => item.id.toString()}
          renderItem={this.renderItem}
          ItemSeparatorComponent={ListItemSeperator}
          getItemLayout={this.getItemLayout}
        />
      );
    }
    return null;
  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderLoading()}
        {this.renderError()}
        {/* <SearchBox handleSearBoxChange={this.handleSearBoxChange} /> */}
        {this.renderList()}
      </View>
    );
  }
}

let loadedTickers = {};
const listItemHeight = 132;
const baseImageLink =
  "https://s2.coinmarketcap.com/static/img/coins/64x64/{id}.png";

class ListItem extends React.PureComponent {
  render() {
    return (
      <TouchableOpacity
        style={styles.homeListItem}
        onPress={this.props.onTouch}
      >
        <View style={styles.homeListItemImageContainer}>
          <Image
            source={{ uri: baseImageLink.replace("{id}", this.props.id) }}
            style={styles.homeListItemImage}
          />
        </View>
        <View style={styles.columnFlex}>
          <View style={styles.rowFlex}>
            <View style={styles.columnFlex}>
              <Text style={styles.textTitle}>
                {this.props.name} ({this.props.symbol})
              </Text>
              <View style={styles.rowFlexOnly}>
                <Text style={styles.textSubtitle}>Price: </Text>
                <Text style={styles.textDollar}>
                  {StringUtils.formatCurrency(this.props.price, "$")}
                </Text>
              </View>
              <View style={styles.rowFlexOnly}>
                <Text style={styles.textSubtitle}>MarketCap: </Text>
                <Text style={styles.textDollar}>
                  {StringUtils.formatCurrency(this.props.market_cap, "$")}
                </Text>
              </View>
              <View style={styles.rowFlexOnly}>
                <Text style={styles.textSubtitle}>Volume 24h: </Text>
                <Text style={styles.textDollar}>
                  {StringUtils.formatCurrency(this.props.volume_24h, "$")}
                </Text>
              </View>
            </View>
            <View
              style={{
                justifyContent: "center"
              }}
            >
              <Icon size={24} name="heart" color={Theme.color.PRIMARY_COLOR} />
            </View>
          </View>
          <View style={[styles.rowFlex, styles.changeLayout]}>
            <View style={styles.rowFlexOnly}>
              <Text style={styles.textSubtitle}>1h </Text>
              <Text
                style={
                  this.props.percent_change_1h < 0
                    ? styles.textNegivie
                    : styles.textPositive
                }
              >
                {this.props.percent_change_1h < 0
                  ? this.props.percent_change_1h + "%"
                  : "+" + this.props.percent_change_1h + "%"}
              </Text>
            </View>
            <View style={styles.rowFlexOnly}>
              <Text style={styles.textSubtitle}>24h </Text>
              <Text
                style={
                  this.props.percent_change_24h < 0
                    ? styles.textNegivie
                    : styles.textPositive
                }
              >
                {this.props.percent_change_24h < 0
                  ? this.props.percent_change_24h + "%"
                  : "+" + this.props.percent_change_24h + "%"}
              </Text>
            </View>
            <View style={styles.rowFlexOnly}>
              <Text style={styles.textSubtitle}>7d </Text>
              <Text
                style={
                  this.props.percent_change_7d < 0
                    ? styles.textNegivie
                    : styles.textPositive
                }
              >
                {this.props.percent_change_7d < 0
                  ? this.props.percent_change_7d + "%"
                  : "+" + this.props.percent_change_7d + "%"}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
