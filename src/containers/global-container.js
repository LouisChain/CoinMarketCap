import React, { Component } from "react";
import { connect } from "react-redux";
import GlobalView from "../components/screens/main/global";
import { fetchGlobalData } from "../actions/global-action";

class GlobalContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchGlobalData();
  }

  render() {
    return <GlobalView {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.globalReducer.isLoading,
    isError: state.globalReducer.isError,
    global: state.globalReducer.global
  };
}

export default connect(
  mapStateToProps,
  { fetchGlobalData }
)(GlobalContainer);
