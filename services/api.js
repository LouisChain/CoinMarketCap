import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.coinmarketcap.com",
  timeout: 30000
});

export default {
  getTickers: () => {
    return instance.get("/v2/ticker/", {
      params: {
        limit: 1000,
        structure: "array"
      }
    });
  },
  getGlobalData: () => {
    return instance.get("/v2/global/");
  },
  getHistoricalData: (period, symbol) => {
    let url = "http://coincap.io/history/{period}/{symbol}";
    url = url.replace("{period}", period);
    url = url.replace("{symbol}", symbol);
    return axios.get(url);
  }
};
