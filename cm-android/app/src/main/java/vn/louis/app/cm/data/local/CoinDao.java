package vn.louis.app.cm.data.local;

import android.arch.persistence.room.Dao;
import android.arch.persistence.room.Insert;
import android.arch.persistence.room.OnConflictStrategy;
import android.arch.persistence.room.Query;

import java.util.List;

import io.reactivex.Completable;
import vn.louis.app.cm.domain.model.CoinModel;
import io.reactivex.Flowable;
import io.reactivex.Maybe;

@Dao
public interface CoinDao {

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    void insert(CoinModel coinModel);

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    void insertAll(List<CoinModel> coinModels);

    @Query("SELECT * FROM TBLCOIN WHERE name=:name")
    Maybe<CoinModel> get(String name);

    @Query("SELECT * FROM tblCoin ORDER BY id ASC")
    Flowable<List<CoinModel>> getAll();

    @Query("DELETE FROM TBLCOIN")
    void deleteAll();
}
