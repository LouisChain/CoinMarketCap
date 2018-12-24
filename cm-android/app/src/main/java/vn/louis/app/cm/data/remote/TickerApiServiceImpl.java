package vn.louis.app.cm.data.remote;

import java.util.List;

import io.reactivex.Flowable;
import io.reactivex.Maybe;
import vn.louis.app.cm.data.remote.transformer.PluralApiTransformer;
import vn.louis.app.cm.domain.model.CoinModel;
import vn.louis.app.cm.domain.service.TickerApiService;

public class TickerApiServiceImpl implements TickerApiService {

    private final HttpService mHttpService;

    public TickerApiServiceImpl(HttpService httpService) {
        mHttpService = httpService;
    }

    @Override
    public Maybe<CoinModel> getSingleTicker(String name) {
        return Maybe.empty();
    }

    @Override
    public Flowable<List<CoinModel>> getTickers() {
        return mHttpService.getTickers().compose(new PluralApiTransformer<>());
    }
}
