import { combineReducers } from "redux";
import cryptoReducer from "./crypto-reducer";
import nav from "./nav-reducer";

const reducer = combineReducers({
  cryptoReducer,
  nav
});

export default reducer;
