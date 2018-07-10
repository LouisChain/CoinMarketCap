import React, { Component } from "react";
import { connect } from "react-redux";
import HomeView from "../components/screens/main/home";
import { fetchAllCrypto } from "../actions/get-coins-action";

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
  }

  componentDidMount() {
    this.props.fetchAllCrypto();
  }

  render() {
    return <HomeView {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.cryptoReducer.isLoading,
    isError: state.cryptoReducer.isError,
    cryptos: state.cryptoReducer.cryptos
  };
}

export default connect(
  mapStateToProps,
  { fetchAllCrypto }
)(HomeContainer);
