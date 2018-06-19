import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1
  },
  homeListItem: {
    flex: 1,
    padding: 16,
    flexDirection: "row",
    alignSelf: "baseline",
    backgroundColor: "#fff"
  },
  homeListItemImageContainer: {
    width: 48,
    paddingRight: 16,
    justifyContent: "center"
  },
  homeListItemImage :{
    width: 32,
    height: 32
  }
});
