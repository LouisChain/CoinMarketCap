import { StyleSheet } from "react-native";
import Common from "../../styles/common"
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Common.BACKGROUND_COLOR
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
    color: Common.PRIMARY_COLOR,
    fontSize: 16,
    fontWeight: "bold"
  },
  textSubtitle: {
    color: Common.SECOND_PRIMARY_COLOR,
    fontSize: 14
  },
  textDollar: {
    fontWeight: "bold",
    color: Common.PRIMARY_TEXT_COLOR,
    fontSize: 14
  },
  textPositive: {
    color: Common.POSITIVE_COLOR,
    fontSize: 14
  },
  textNegivie: {
    color: Common.NEGATIVE_COLOR,
    fontSize: 14
  },
  timeStyle: {
    color: Common.PRIMARY_TEXT_COLOR,
    fontStyle: "italic"
  },
});
