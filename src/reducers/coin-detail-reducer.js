import {
  START_FETCH_CHART,
  FETCH_CHART_SUCCESS,
  FETCH_CHART_FAILURE
} from "../constants/action-type";
const defaultState = {
  selectedIndex: 0,
  isLoading: false,
  chartData: [],
  chartTime: [0, 1, 2, 3, 4, 5, 6, 7],
  isError: false
};

const chartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case START_FETCH_CHART:
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case FETCH_CHART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        chartData: action.chartData,
        isError: false
      };
    case FETCH_CHART_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    default:
      return state;
  }
};

export default chartReducer;
