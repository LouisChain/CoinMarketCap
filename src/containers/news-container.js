import React, { Component } from "react";
import NewsView from "../components/screens/main/news";

class NewsContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <NewsView {...this.props} />;
  }
}

export default NewsContainer;
