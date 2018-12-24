package vn.louis.app.cm.domain.usecase;

import java.util.List;

import javax.inject.Inject;

import io.reactivex.Flowable;
import vn.louis.app.cm.domain.model.CoinModel;
import vn.louis.app.cm.domain.service.TickerApiService;
import vn.louis.app.cm.domain.service.TickerLocalService;

public class GetTickersUseCase {

    private TickerApiService mTickerApiService;
    private TickerLocalService mTickerLocalService;

    @Inject
    public GetTickersUseCase(TickerApiService apiService, TickerLocalService localService) {
        mTickerApiService = apiService;
        mTickerLocalService = localService;
    }

    public Flowable<List<CoinModel>> get() {
        return mTickerLocalService.getTickers()
                .filter(item -> item == null || item.size() == 0)
                .flatMap(item -> mTickerApiService.getTickers()
//                        .flatMap(tickers -> mTickerLocalService.saveTickers(tickers).toFlowable())
                );
    }
}
