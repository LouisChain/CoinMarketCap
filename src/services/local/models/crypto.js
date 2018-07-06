import Realm from "realm";

export default class Crypto extends Realm.Object {
  // get fullName() {
  //   return this.firstName + ' ' + this.lastName;
  // }
}

Crypto.schema = {
  name: "Crypto",
  primaryKey: "id",
  properties: {
    id: "int",
    name: "string",
    symbol: "string",
    rank: { type: "int", indexed: true },
    circulating_supply: { type: "float", optional: true },
    total_supply: { type: "float", optional: true },
    max_supply: { type: "float", optional: true },
    price: "float",
    volume_24h: "float",
    market_cap: "float",
    percent_change_1h: "float",
    percent_change_24h: "float",
    percent_change_7d: "float",
    last_updated: "float",
    isFavourite: "bool"
  }
};
