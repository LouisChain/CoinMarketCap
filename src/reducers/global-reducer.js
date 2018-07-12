import {
  START_FETCH_GLOBAL,
  FETCH_GLOBAL_SUCCESS,
  FETCH_GLOBAL_FAILURE
} from "../constants/action-type";
const defaultState = {
  isLoading: false,
  global: {
    active_cryptocurrencies: 0,
    active_markets: 0,
    bitcoin_percentage_of_market_cap: 0,
    total_market_cap: 0,
    total_volume_24h: 0,
    last_updated: 0
  },
  isError: false
};

const globalReducer = (state = defaultState, action) => {
  switch (action.type) {
    case START_FETCH_GLOBAL:
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case FETCH_GLOBAL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        global: {
          active_cryptocurrencies: action.global.active_cryptocurrencies,
          active_markets: action.global.active_markets,
          bitcoin_percentage_of_market_cap:action.global.bitcoin_percentage_of_market_cap,
          total_market_cap: action.global.quotes.USD.total_market_cap,
          total_volume_24h: action.global.quotes.USD.total_volume_24h,
          last_updated: action.global.last_updated
        },
        isError: false
      };
    case FETCH_GLOBAL_FAILURE:
      return {
        ...state,
        isError: true
      };
    default:
      return state;
  }
};

export default globalReducer;
