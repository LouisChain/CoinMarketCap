import Realm from "realm";

export default class Global extends Realm.Object {}

Global.schema = {
  name: "Global",
  properties: {
    active_cryptocurrencies: "int",
    active_markets: "int",
    bitcoin_percentage_of_market_cap: "float",
    total_market_cap: "float",
    total_volume_24h: "float",
    last_updated: "float"
  }
};
