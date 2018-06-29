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
    let url = "/history{period}/{symbol}";
    url = url.replace("{period}", period == null ? "" : "/" + period);
    url = url.replace("{symbol}", symbol);
    return axios
      .create({
        baseURL: "http://coincap.io",
        timeout: 30000
      })
      .get(url);
  }
};
