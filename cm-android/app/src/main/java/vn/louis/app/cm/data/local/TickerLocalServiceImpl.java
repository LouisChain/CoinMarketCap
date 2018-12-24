package vn.louis.app.cm.data.local;

import java.util.List;

import io.reactivex.Completable;
import io.reactivex.Flowable;
import io.reactivex.Maybe;
import vn.louis.app.cm.domain.model.CoinModel;
import vn.louis.app.cm.domain.service.TickerLocalService;

public class TickerLocalServiceImpl implements TickerLocalService {

    private final MVVMDatabase mvvmDatabase;

    public TickerLocalServiceImpl(MVVMDatabase database) {
        this.mvvmDatabase = database;
    }

    @Override
    public Flowable<List<CoinModel>> getTickers() {
        return mvvmDatabase.coinDao().getAll();
    }

    @Override
    public Maybe<CoinModel> getSingleTicker(String name) {
        return mvvmDatabase.coinDao().get(name);
    }

    @Override
    public Completable saveTickers(List<CoinModel> tickers) {
        return Completable.fromAction(() -> mvvmDatabase.coinDao().insertAll(tickers));
    }
}
