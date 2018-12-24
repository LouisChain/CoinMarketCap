package vn.louis.app.cm.ui.utils;

import android.arch.lifecycle.ViewModel;
import android.arch.lifecycle.ViewModelProvider;
import android.support.annotation.NonNull;

import javax.inject.Inject;
import javax.inject.Singleton;

import vn.louis.app.cm.domain.usecase.GetTickersUseCase;
import vn.louis.app.cm.ui.home.HomeShareViewModel;

@Singleton
public class ViewModelFactory implements ViewModelProvider.Factory {

    private final GetTickersUseCase mGetTickersUseCase;

    @Inject
    public ViewModelFactory(GetTickersUseCase getTickersUseCase) {
        mGetTickersUseCase = getTickersUseCase;
    }

    @NonNull
    @Override
    public <T extends ViewModel> T create(@NonNull Class<T> modelClass) {
        if (modelClass.isAssignableFrom(HomeShareViewModel.class)) {
            return (T) new HomeShareViewModel(mGetTickersUseCase);
        }
        throw new IllegalArgumentException("Unknown ViewModel class");
    }
}
