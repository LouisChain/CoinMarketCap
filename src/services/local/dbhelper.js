//console.log(Realm.defaultPath); //=>/data/data/com.coinmarketcap/files/default.realm
import Realm from "realm";
import Crypto from "./models/crypto";
import Global from "./models/global-data";

const schema = [Crypto, Global];
const options = {
  schema: schema
  //   sync: {
  //     user: userA,
  //     url: realmUrl,
  //     error: err => console.log(err)
  //   },
  // path: 'anotherRealm.realm',
  // schemaVersion: 1
};
const realm = new Realm(options);

class DbHelper {
  getRealmInstance() {
    if (realm != null) {
      return realm;
    } else {
      throw new Error("dbhelper.js :: Active Instance Not Set!");
    }
  }
  singleQuery(model, filter) {
    let results = realm.objects(model);
    if (filter) {
      return results.filtered(filter);
    }
    return results;
  }

  singleInsert(model, value) {
    realm.write(() => {
      realm.create(model, value);
      console.log("inserted value for " + model);
    });
  }

  multiInsert(model, values) {
    realm.write(() => {
      for (v in values) {
        realm.create(model, v);
      }
      console.log("inserted values for " + model);
    });
  }

  singleUpdate() {}

  delete() {}

  close() {}
}

export default new DbHelper();
