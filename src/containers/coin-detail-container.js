import React, { Component } from "react";
import { connect } from "react-redux";
import CoinDetailView from "../components/screens/coin-detail/coin-detail";
import { fetchChartData } from "../actions/get-coin-detail-action";

class CoinDetailContainer extends Component {
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

  componentDidMount() {
    let symbol = this.props.navigation.getParam("symbol", "BTC");
    this.handleSelectionChart(this.props.selectedIndex, symbol);
  }

  render() {
    return (
      <CoinDetailView
        {...this.props}
        onChartChange={this.handleSelectionChart}
        navigation={this.props.navigation}
        nav={this.nav}
      />
    );
  }

  handleSelectionChart = (index, symbol) => {
    this.props.fetchChartData(index, symbol);
  };
}

function mapStateToProps(state) {
  return {
    selectedIndex: state.cdetail.selectedIndex,
    isLoading: state.cdetail.isLoading,
    isError: state.cdetail.isError,
    chartData: state.cdetail.chartData,
    chartTime: state.cdetail.chartTime,
    nav: state.nav
  };
}

export default connect(
  mapStateToProps,
  { fetchChartData }
)(CoinDetailContainer);
