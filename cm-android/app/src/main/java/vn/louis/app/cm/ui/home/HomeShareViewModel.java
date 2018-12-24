package vn.louis.app.cm.ui.home;

import timber.log.Timber;
import vn.louis.app.cm.domain.usecase.GetTickersUseCase;
import vn.louis.app.cm.ui.common.MVVMViewModel;
import vn.louis.app.cm.ui.common.Response;
import vn.louis.app.cm.ui.utils.Transformer;

public class HomeShareViewModel extends MVVMViewModel {

    private final GetTickersUseCase mGetTickersUseCase;

    public HomeShareViewModel(GetTickersUseCase getTickersUseCase) {
        mGetTickersUseCase = getTickersUseCase;
    }

    public void loadTickers() {
        manageSubscription(
                mGetTickersUseCase.get()
                        .compose(Transformer.applyIoScheduler())
                        .subscribe(tickers -> {
                            setState(Response.success(tickers));
                        }, throwable -> {
                            setState(Response.error(throwable));
                            Timber.d("LoadTickers >>>", throwable);
                        })
        );
    }

}
