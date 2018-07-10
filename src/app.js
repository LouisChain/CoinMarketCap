import React, { Component } from "react";
import { AppNavigator } from "./navigator";
import { Provider } from "react-redux";
import store from "./store/store";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
