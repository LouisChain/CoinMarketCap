package vn.louis.app.cm.ui.common;

import android.arch.lifecycle.MutableLiveData;
import android.arch.lifecycle.ViewModel;
import android.support.annotation.NonNull;

import io.reactivex.disposables.CompositeDisposable;
import io.reactivex.disposables.Disposable;

public abstract class MVVMViewModel<T> extends ViewModel {
    private final CompositeDisposable mDisposable = new CompositeDisposable();
    private final MutableLiveData<T> mLiveData = new MutableLiveData<>();

    @Override
    protected void onCleared() {
        super.onCleared();
        mDisposable.clear();
    }

    public MutableLiveData<T> getState() {
        return mLiveData;
    }

    public void setState(T state) {
        mLiveData.setValue(state);
    }

    public void manageSubscription(@NonNull Disposable disposable) {
        mDisposable.add(disposable);
    }
}
