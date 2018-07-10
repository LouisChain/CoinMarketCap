import { getTickers } from "../services/cloud/api";
import LocalCrypto from "../services/local/crypto-db";
import {
  START_FETCH_CRYPTO,
  FETCH_CRYPTO_SUCCESS,
  FETCH_CRYPTO_FAILURE
} from "../constants/action-type";

function startFetchCrypto() {
  return {
    type: START_FETCH_CRYPTO
  };
}

function fetchCryptoSuccess(cryptos) {
  return {
    type: FETCH_CRYPTO_SUCCESS,
    cryptos
  };
}

function fetchCryptoFailure() {
  return {
    type: FETCH_CRYPTO_FAILURE
  };
}

export function fetchAllCrypto() {
  return dispatch => {
    dispatch(startFetchCrypto());
    getTickers()
      .then(response => {
        // var arr = [];
        // for (var prop in response.data.data) {
        //   arr.push(response.data.data[prop]);
        // }
        dispatch(fetchCryptoSuccess(response.data.data));
      })
      .catch(err => {
        dispatch(fetchCryptoFailure());
      });
  };
}
