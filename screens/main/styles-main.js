import { StyleSheet } from "react-native";
import Common from "../../styles/common";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Common.BACKGROUND_COLOR
  },
  homeListItem: {
    flex: 1,
    padding: 16,
    flexDirection: "row",
    alignSelf: "baseline",
    backgroundColor: Common.BACKGROUND_COLOR
  },
  homeListItemImageContainer: {
    width: 48,
    paddingRight: 16,
    justifyContent: "center"
  },
  homeListItemImage: {
    width: 32,
    height: 32
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
  containerGlobal: {
    marginTop: 16,
    padding: 16,
    alignItems: "center",
    flexDirection: "column"
  },
  marketCap: {
    color: Common.PRIMARY_COLOR,
    fontSize: 32,
    fontWeight: "bold"
  },
  marketCapNumber: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold"
  },
  containerGlobal2: {
    paddingTop: 16,
    flexDirection: "column"
  },
  rowOdd: {
    flexDirection: "row",
    backgroundColor: Common.ACTION_BAR_COLOR,
    padding: 16
  },
  rowEven: {
    flexDirection: "row",
    backgroundColor: Common.BACKGROUND_COLOR,
    padding: 16
  },
  textCapLeft: {
    flex: 1,
    color: Common.SECOND_PRIMARY_COLOR,
    fontSize: 14,
    textAlign: "left"
  },
  timeStyle: {
    color: Common.PRIMARY_COLOR,
    fontStyle: "italic"
  },
  textCapRight: {
    flex: 1,
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "right"
  }
});
