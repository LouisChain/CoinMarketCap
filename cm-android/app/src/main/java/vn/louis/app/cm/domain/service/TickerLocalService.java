package vn.louis.app.cm.domain.service;

import java.util.List;

import io.reactivex.Completable;
import io.reactivex.Flowable;
import io.reactivex.Maybe;
import vn.louis.app.cm.domain.model.CoinModel;

public interface TickerLocalService {

    Flowable<List<CoinModel>> getTickers();

    Maybe<CoinModel> getSingleTicker(String name);

    Completable saveTickers(List<CoinModel> tickers);
}
