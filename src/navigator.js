import React from "react";
import {
  createTabNavigator,
  createBottomTabNavigator,
  TabBarBottom,
  createStackNavigator
} from "react-navigation";
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware
} from "react-navigation-redux-helpers";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";
import Theme from "./styles/theme";
import HomeScreen from "./containers/home-container";
import FavouriteScreen from "./containers/favourite-container";
import GlobalScreen from "./containers/global-container";
import NewsScreen from "./containers/news-container";
import CoinDetailScreen from "./containers/coin-detail-container";
import * as Screen from "./constants/screen";

const TabbarStackNavigator = createTabNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Favourite: {
      screen: FavouriteScreen
    },
    Global: {
      screen: GlobalScreen
    },
    News: {
      screen: NewsScreen
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === Screen.HOME) {
          //iconName = `ios-information-circle${focused ? "" : "-outline"}`;
          iconName = "home";
        } else if (routeName === Screen.FAVOURITE) {
          iconName = "heart";
        } else if (routeName === Screen.GLOBAL_) {
          iconName = "globe";
        } else if (routeName === Screen.NEWS) {
          iconName = "snowflake-o";
        }
        return <Icon name={iconName} size={24} color={tintColor} />;
      }
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: "bottom",
    tabBarOptions: {
      activeTintColor: Theme.color.PRIMARY_COLOR,
      inactiveTintColor: Theme.color.TAB_INACTIVE_COLOR,
      style: {
        backgroundColor: Theme.color.ACTION_BAR_COLOR
      }
    },
    animationEnabled: true,
    swipeEnabled: true
  }
);

const RootStackNavigator = createStackNavigator(
  {
    Tabbar: {
      screen: TabbarStackNavigator,
      navigationOptions: {
        title: "All Crypto"
      }
    },
    CoinDetail: {
      screen: CoinDetailScreen
    }
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: Theme.color.ACTION_BAR_COLOR
      },
      headerTintColor: Theme.color.PRIMARY_COLOR,
      headerTitleStyle: {
        fontSize: 18,
        fontWeight: "normal"
      }
    }
  }
);

const navMiddleWare = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav
);

const AppWithNavigationState = reduxifyNavigator(RootStackNavigator, "root");

const mapStateToProps = state => ({
  state: state.nav
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootStackNavigator, AppNavigator, navMiddleWare };
// todo:
// add last update time to home
// redux-logger
// redux-persist
// react-redux-realm

