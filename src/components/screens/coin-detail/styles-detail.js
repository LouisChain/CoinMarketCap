import { StyleSheet } from "react-native";
import Theme from "../../../styles/theme";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.color.BACKGROUND_COLOR
  },
  rowFlex: {
    flex: 1,
    flexDirection: "row"
  },
  rowFlexOnly: {
    flexDirection: "row"
  },
  columnFlex: {
    flex: 1,
    flexDirection: "column"
  },
  changeLayout: {
    justifyContent: "space-between",
    marginTop: 4
  },
  textTitle: {
    color: Theme.color.PRIMARY_COLOR,
    fontSize: 16,
    fontWeight: "bold"
  },
  textSubtitle: {
    color: Theme.color.SECOND_PRIMARY_COLOR,
    fontSize: 14
  },
  textDollar: {
    fontWeight: "bold",
    color: Theme.color.PRIMARY_TEXT_COLOR,
    fontSize: 14
  },
  textPositive: {
    color: Theme.color.POSITIVE_COLOR,
    fontSize: 14
  },
  textNegivie: {
    color: Theme.color.NEGATIVE_COLOR,
    fontSize: 14
  },
  timeStyle: {
    color: Theme.color.PRIMARY_TEXT_COLOR,
    fontStyle: "italic"
  },
});
