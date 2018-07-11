import { combineReducers } from "redux";
import cryptoReducer from "./crypto-reducer";
import nav from "./nav-reducer";
import cdetail from "./coin-detail-reducer";

const reducer = combineReducers({
  cryptoReducer,
  nav,
  cdetail
});

export default reducer;
