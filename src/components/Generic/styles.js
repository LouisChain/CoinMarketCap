import { StyleSheet } from "react-native";
import Common from "../styles/common";

export default StyleSheet.create({
  indicator: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Common.BACKGROUND_COLOR
  },
  searchBoxContainer: {
    padding: 8,
    justifyContent: "center",
    backgroundColor: "#fff"
  },
  searchBoxInput: {
    height: 48,
    paddingLeft: 16,
    paddingRight: 16,
    fontSize: 16,
    borderRadius: 4,
    shadowOffset: {
      width: 0,
      height: -2,
      shadowOpacity: 0.8,
      shadowRadius: 4,
      shadowColor: "#c1c1c1"
    },
    elevation: 3
  }
});
