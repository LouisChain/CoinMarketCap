import React from "react";
import { createStackNavigator } from "react-navigation";
import Main from "../screens/main/main";
import { Image, Text } from "react-native";
import CoinDetail from "../screens/coin-detail/coin-detail";
import Home from "../screens/main/home";
import { PRIMARY_COLOR } from "../styles/common";
export const MAIN = "MAIN";
export const COIN_DETAIL = "COIN_DETAIL";
export const HOME = "HOME";
const App = createStackNavigator(
  {
    MAIN: {
      screen: Main,
      headerMode: "none"
    },
    HOME: {
      screen: Home
    },
    COIN_DETAIL: {
      screen: CoinDetail,
      mode: "modal"
    }
  },
  {
    initialRouteName: MAIN,
    navigationOptions: {
      // headerTitle: <Image source={require("../icon/react.png")} />,
      headerStyle: {
        backgroundColor: PRIMARY_COLOR
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontSize: 18,
        fontWeight: "normal"
      }
    }
  }
);

class Modal extends React.Component {
  render() {
    return (
      <Text
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          fontSize: 30
        }}
      >
        This is a modal!
      </Text>
    );
  }
}

const RootStack = createStackNavigator(
  {
    ROOT: {
      screen: App
    },
    MODAL: {
      screen: Modal
    }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

// export default class App extends React.Component {
//   render() {
//     return <RootStack />;
//   }
// }

export default App;
