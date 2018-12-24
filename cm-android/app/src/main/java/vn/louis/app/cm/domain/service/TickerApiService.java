package vn.louis.app.cm.domain.service;

import java.util.List;

import vn.louis.app.cm.domain.model.CoinModel;
import io.reactivex.Flowable;
import io.reactivex.Maybe;

public interface TickerApiService {

    Maybe<CoinModel> getSingleTicker(String name);

    Flowable<List<CoinModel>> getTickers();
}
