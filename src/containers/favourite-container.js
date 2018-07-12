import React, { Component } from "react";
import FavouriteView from "../components/screens/main/favourite";

class FavouriteContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <FavouriteView {...this.props} />;
  }
}

export default FavouriteContainer;
