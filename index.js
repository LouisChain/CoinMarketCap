import { AppRegistry } from "react-native";
import App from "./src/app";
import { YellowBox } from "react-native";
// import App from "./test"
YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader"
]);

AppRegistry.registerComponent("CoinMarketCap", () => App);
