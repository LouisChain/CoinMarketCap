import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.coinmarketcap.com",
  timeout: 30000
});

export const getTickers = () => {
  return instance.get("/v2/ticker/", {
    params: {
      limit: 1000,
      structure: "array"
    }
  });
};
