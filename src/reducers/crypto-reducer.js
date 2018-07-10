import {
  START_FETCH_CRYPTO,
  FETCH_CRYPTO_SUCCESS,
  FETCH_CRYPTO_FAILURE
} from "../constants/action-type";
const defaultState = {
  isLoading: false,
  cryptos: [],
  isError: false
};

const cryptoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case START_FETCH_CRYPTO:
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case FETCH_CRYPTO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cryptos: action.cryptos,
        isError: false
      };
    case FETCH_CRYPTO_FAILURE:
      return {
        ...state,
        isError: true
      };
    default:
      return state;
  }
};

export default cryptoReducer;
