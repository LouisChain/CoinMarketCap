package vn.louis.app.cm.domain.model;

import android.arch.persistence.room.ColumnInfo;
import android.arch.persistence.room.Entity;
import android.arch.persistence.room.PrimaryKey;
import android.support.annotation.NonNull;

@Entity(tableName = "tblCoin")
public class CoinModel {
    //
//      "id": 1,
//              "name": "Bitcoin",
//              "symbol": "BTC",
//              "website_slug": "bitcoin",
//              "rank": 1,
//              "circulating_supply": 17434150.0,
//              "total_supply": 17434150.0,
//              "max_supply": 21000000.0,
//              "quotes": {
//        "USD": {
//            "price": 4046.00439299,
//                    "volume_24h": 9210216735.0309,
//                    "market_cap": 70538647488.0,
//                    "percent_change_1h": 0.77,
//                    "percent_change_24h": 6.07,
//                    "percent_change_7d": 22.12
//        }
//    },
//            "last_updated": 1545376701
//}
//@PrimaryKey(autoGenerate = true)
    @PrimaryKey
    @NonNull
    @ColumnInfo(name = "id")
    public int id;
    @ColumnInfo(index = true)
    public String name;
    public String symbol;
    @ColumnInfo(name = "website_slug")
    public String webSiteSlug;
    public int rank;
    @ColumnInfo(name = "circulating_supply")
    public float circulatingSupply;
    @ColumnInfo(name = "total_supply")
    public float totalSupply;
    @ColumnInfo(name = "max_supply")
    public float maxSupply;
    public float price;
    @ColumnInfo(name = "volume_24h")
    public float volumn24h;
    @ColumnInfo(name = "market_cap")
    public float marketCap;
    @ColumnInfo(name = "percent_change_1h")
    public float percent1H;
    @ColumnInfo(name = "percent_change_24h")
    public float percent24H;
    @ColumnInfo(name = "percent_change_7d")
    public float percent7D;
    @ColumnInfo(name = "last_updated")
    public long lastUpdated;
}
