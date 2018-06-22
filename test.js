import React from "react";
import {Text, Button} from "react-native";
import { createStackNavigator } from "react-navigation";

class Test1 extends React.Component{
    render(){
        return <Button onPress={() => this.props.navigation.navigate("Home1")} title="Button"></Button>
    }
}

class Test2 extends React.Component{
    render(){
        return <Text>Test2</Text>
    }
}

const App = createStackNavigator(
    {
      Home: { screen: Test1 },
      Home1: { screen: Test2 }
    },
    {
      initialRouteName: "Home"
    }
  );
  
  // export default class App extends React.Component {
  //   render() {
  //     return <RootStack />;
  //   }
  // }
  
  export default App;