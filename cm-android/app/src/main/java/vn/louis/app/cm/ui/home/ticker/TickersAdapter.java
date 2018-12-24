package vn.louis.app.cm.ui.home.ticker;

import android.databinding.DataBindingUtil;
import android.support.annotation.NonNull;
import android.support.v7.util.DiffUtil;
import android.view.LayoutInflater;
import android.view.ViewGroup;

import java.util.ArrayList;
import java.util.List;

import io.reactivex.Observable;
import io.reactivex.android.schedulers.AndroidSchedulers;
import io.reactivex.disposables.Disposable;
import vn.louis.app.cm.databinding.ItemTickerBinding;
import vn.louis.app.cm.domain.model.CoinModel;
import vn.louis.app.cm.ui.common.LifecycleRecyclerAdapter;

public class TickersAdapter extends LifecycleRecyclerAdapter<CoinModel, TickersViewHolder> {

    @NonNull
    @Override
    public TickersViewHolder onCreateViewHolder(@NonNull ViewGroup viewGroup, int viewType) {
        LayoutInflater layoutInflater = LayoutInflater.from(viewGroup.getContext());
        ItemTickerBinding binding = DataBindingUtil.inflate(layoutInflater, viewType, viewGroup, false);
        return new TickersViewHolder(binding);
    }

    @Override
    public void onBindViewHolder(@NonNull TickersViewHolder tickerViewHolder, int i) {
        CoinModel coinModel = getItem(i);
        tickerViewHolder.onBindData(coinModel);
    }

    public Disposable bindData(Observable<List<CoinModel>> listObservable) {
        List<CoinModel> newList = new ArrayList<>();
        return listObservable
                .doOnNext(newList::addAll)
                .map(list -> DiffUtil.calculateDiff(new TickersDiffCallback(list, mDataSource)))
                .observeOn(AndroidSchedulers.mainThread())
                .doOnNext(its -> mDataSource = newList)
                .subscribe(its -> {
                    its.dispatchUpdatesTo(this);
                });
    }
}
