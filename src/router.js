import React from "react";
import {
  createTabNavigator,
  createBottomTabNavigator,
  TabBarBottom,
  createStackNavigator
} from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";
import Theme from "./styles/theme";
import HomeScreen from "./components/screens/main/home";
import FavouriteScreen from "./components/screens/main/favourite";
import GlobalScreen from "./components/screens/main/global";
import NewsScreen from "./components/screens/main/news";
import CoinDetailScreen from "./components/screens/coin-detail/coin-detail";
import * as Screen from "./constants/screen";

const TabBarScreen = createTabNavigator(
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

const Router = createStackNavigator(
  {
    TabBar: {
      screen: TabBarScreen
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

export default Router;
// todo:
// add last update time to home
