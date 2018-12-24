package vn.louis.app.cm.ui.home.ticker;

import android.net.Uri;
import android.support.annotation.NonNull;

import vn.louis.app.cm.databinding.ItemTickerBinding;
import vn.louis.app.cm.domain.model.CoinModel;
import vn.louis.app.cm.ui.common.LifecycleViewHolder;
import vn.louis.app.cm.ui.utils.Constants;

public class TickersViewHolder extends LifecycleViewHolder<CoinModel, ItemTickerBinding> {

    public TickersViewHolder(@NonNull ItemTickerBinding itemView) {
        super(itemView);
    }

    @Override
    protected void onBindData(CoinModel data) {
        binding.img.setImageURI(Uri.parse(Constants.BASE_TICKER_ICON.replace("{id}", String.valueOf(data.id))));
        binding.executePendingBindings();
    }
}
