import { createStore, applyMiddleware } from "redux";
import reducer from "../reducers/reducer";
import thunk from "redux-thunk";
import { navMiddleWare } from "../navigator";

const store = createStore(reducer, applyMiddleware(thunk, navMiddleWare));

export default store;
