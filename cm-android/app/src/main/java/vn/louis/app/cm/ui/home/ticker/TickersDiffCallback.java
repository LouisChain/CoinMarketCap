package vn.louis.app.cm.ui.home.ticker;

import android.support.annotation.Nullable;
import android.support.v7.util.DiffUtil;

import java.util.List;

import vn.louis.app.cm.domain.model.CoinModel;

public class TickersDiffCallback extends DiffUtil.Callback {

    List<CoinModel> oldList;
    List<CoinModel> newList;

    public TickersDiffCallback(List<CoinModel> newModel, List<CoinModel> oldModel) {
        this.newList = newModel;
        this.oldList = oldModel;
    }

    @Override
    public int getOldListSize() {
        return oldList.size();
    }

    @Override
    public int getNewListSize() {
        return newList.size();
    }

    @Override
    public boolean areItemsTheSame(int oldItemPosition, int newItemPosition) {
        return oldList.get(oldItemPosition).id == newList.get(newItemPosition).id;
    }

    @Override
    public boolean areContentsTheSame(int oldItemPosition, int newItemPosition) {
        return oldList.get(oldItemPosition).name.equals(newList.get(newItemPosition).name)
                && oldList.get(oldItemPosition).webSiteSlug.equals(newList.get(newItemPosition).webSiteSlug)
                && oldList.get(oldItemPosition).symbol.equals(newList.get(newItemPosition).symbol)
                && oldList.get(oldItemPosition).circulatingSupply == newList.get(newItemPosition).circulatingSupply
                && oldList.get(oldItemPosition).lastUpdated == newList.get(newItemPosition).lastUpdated
                && oldList.get(oldItemPosition).marketCap == newList.get(newItemPosition).marketCap
                && oldList.get(oldItemPosition).maxSupply == newList.get(newItemPosition).maxSupply
                && oldList.get(oldItemPosition).rank == newList.get(newItemPosition).rank
                && oldList.get(oldItemPosition).price == newList.get(newItemPosition).price
                && oldList.get(oldItemPosition).volumn24h == newList.get(newItemPosition).volumn24h
                && oldList.get(oldItemPosition).percent1H == newList.get(newItemPosition).percent1H
                && oldList.get(oldItemPosition).percent7D == newList.get(newItemPosition).percent7D
                && oldList.get(oldItemPosition).percent24H == newList.get(newItemPosition).percent24H
                && oldList.get(oldItemPosition).totalSupply == newList.get(newItemPosition).totalSupply;
    }

    @Nullable
    @Override
    public Object getChangePayload(int oldItemPosition, int newItemPosition) {
        //you can return particular field for changed item.
        return super.getChangePayload(oldItemPosition, newItemPosition);
    }
}
