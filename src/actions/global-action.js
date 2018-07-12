import { getGlobalData } from "../services/cloud/api";
import LocalCrypto from "../services/local/crypto-db";
import {
  START_FETCH_GLOBAL,
  FETCH_GLOBAL_SUCCESS,
  FETCH_GLOBAL_FAILURE
} from "../constants/action-type";

function startFetchGlobal() {
  return {
    type: START_FETCH_GLOBAL
  };
}

function fetchGlobalSuccess(global) {
  return {
    type: FETCH_GLOBAL_SUCCESS,
    global
  };
}

function fetchGlobalFailure() {
  return {
    type: FETCH_GLOBAL_FAILURE
  };
}

export function fetchGlobalData() {
  return dispatch => {
    dispatch(startFetchGlobal());
    getGlobalData()
      .then(response => {
        dispatch(fetchGlobalSuccess(response.data.data));
      })
      .catch(err => {
        dispatch(fetchGlobalFailure());
      });
  };
}
