import DbHelper from "./dbhelper";

class Db {
  insertCrypto() {
    try {
      const values = {
        id: 1,
        name: "Bitcoin",
        symbol: "BTC",
        rank: 1,
        circulating_supply: 1000,
        total_supply: 2000,
        max_supply: 3000,
        price: 6000,
        volume_24h: 4,
        market_cap: 5,
        percent_change_1h: 6,
        percent_change_24h: 7,
        percent_change_7d: -9,
        last_updated: 100,
        isFavourite: true
      };
      DbHelper.singleInsert("Crypto", values);
    } catch (err) {
      console.log(err);
    }
  }
}

export default new Db();
