import React, { Component } from "react";
import { connect } from "react-redux";
import HomeView from "../components/screens/main/home";
import { fetchAllCrypto } from "../actions/crypto-action";
import { BackHandler } from "react-native";
import { NavigationActions } from "react-navigation";

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
  }

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    this.props.fetchAllCrypto();
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }

  onBackPress = () => {
    const { dispatch, nav } = this.props;
    if (nav.index === 0) {
      return false;
    }

    dispatch(NavigationActions.back());
    return true;
  };

  render() {
    return <HomeView {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.cryptoReducer.isLoading,
    isError: state.cryptoReducer.isError,
    cryptos: state.cryptoReducer.cryptos,
    nav: state.nav
  };
}

export default connect(
  mapStateToProps,
  { fetchAllCrypto }
)(HomeContainer);
