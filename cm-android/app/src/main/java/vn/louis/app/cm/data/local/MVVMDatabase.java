package vn.louis.app.cm.data.local;

import android.arch.persistence.room.Database;
import android.arch.persistence.room.Room;
import android.arch.persistence.room.RoomDatabase;
import android.content.Context;

import vn.louis.app.cm.domain.model.CoinModel;


@Database(entities = {CoinModel.class}, version = 1, exportSchema = false)
public abstract class MVVMDatabase extends RoomDatabase {

    private static volatile MVVMDatabase INSTANCE;

    // Double check locking pattern
    // Make the WordRoomDatabase a singleton to prevent having multiple instances of the database opened at the same time.
    // Should be call
    public static MVVMDatabase getDatabase(final Context context) {
        if (INSTANCE == null) {
            synchronized (MVVMDatabase.class) {
                if (INSTANCE == null) {
                    INSTANCE = Room.databaseBuilder(context.getApplicationContext(), MVVMDatabase.class, "CoinMarketCap").build();
                }
            }
        }
        return INSTANCE;
    }

    public abstract CoinDao coinDao();

}
