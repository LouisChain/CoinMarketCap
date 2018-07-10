import { RootStackNavigator } from "../navigator";

const initialAction = RootStackNavigator.router.getActionForPathAndParams(
  "Tabbar"
);
// console.log(initialAction);
const initialState = RootStackNavigator.router.getStateForAction(initialAction);
console.log(initialState);
const navReducer = (state = initialState, action) => {
  // Our Navigator's router is now responsible for
  // creating our navigation state object
  const nextState = RootStackNavigator.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};

export default navReducer;
