const defaultState = {
  id: 0,
  name: "root user"
};

const reducer = (state = defaultState, action) => {
  // Use combineReducers if there more than one reducers in your app
  switch (action.type) {
    case "LOGIN":
      return { id: 0, name: "root user" };
    default:
      return state;
  }
};

export default reducer;
