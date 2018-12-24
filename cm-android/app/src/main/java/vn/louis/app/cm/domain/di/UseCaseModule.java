package vn.louis.app.cm.domain.di;

import javax.inject.Singleton;

import dagger.Module;
import dagger.Provides;
import vn.louis.app.cm.domain.service.TickerApiService;
import vn.louis.app.cm.domain.service.TickerLocalService;
import vn.louis.app.cm.domain.usecase.GetTickersUseCase;

@Module
public class UseCaseModule {

    @Provides
    @Singleton
    public GetTickersUseCase provideTickersUseCase(TickerApiService apiService, TickerLocalService localService) {
        return new GetTickersUseCase(apiService, localService);
    }
}
