import { getHistoricalData } from "../services/cloud/api";
import LocalCrypto from "../services/local/crypto-db";
import {
  START_FETCH_CHART,
  FETCH_CHART_SUCCESS,
  FETCH_CHART_FAILURE
} from "../constants/action-type";

function startFetchChart() {
  return {
    type: START_FETCH_CHART
  };
}

function fetchChartSuccess(chartData) {
  return {
    type: FETCH_CHART_SUCCESS,
    chartData
  };
}

function fetchChartFailure() {
  return {
    type: FETCH_CHART_FAILURE
  };
}

export function fetchChartData(index, symbol) {
  return dispatch => {
    let period = "1day";
    switch (index) {
      case 0:
        period = "1day"
        break;
      case 1:
        period = "7day";
        break;
      case 2:
        period = "30day";
        break;
      case 3:
        period = "90day";
        break;
      case 4:
        period = "180day";
        break;
      case 5:
        period = "365day";
        break;
      case 6:
        period = null;
        break;
    }
    dispatch(startFetchChart());
    getHistoricalData(period, symbol)
      .then(response => {
        let data = response.data.price;
        let result = [];
        for (var i = 0; i < data.length; i++) {
          result.push(data[i][1]);
        }
        dispatch(fetchChartSuccess(result));
      })
      .catch(err => {
        dispatch(fetchChartFailure());
      });
  };
}
