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

// Take a look to this clean architecture
// Architecture: https://medium.com/@manggit/react-native-redux-realm-js-r3-js-a-new-mobile-development-standard-5290ec02a590
// https://unbug.gitbooks.io/react-native-training/content/4_architecture.html
// Real demo: https://github.com/unbug/TodoRN

// Todo: redux-persist
// redux-logger
// build debug apk install seprately
// navigate back
