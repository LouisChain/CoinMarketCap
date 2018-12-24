package vn.louis.app.cm.ui.home.ticker;

import android.arch.lifecycle.ViewModelProviders;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import java.util.List;

import javax.inject.Inject;

import io.reactivex.Observable;
import io.reactivex.disposables.CompositeDisposable;
import vn.louis.app.cm.R;
import vn.louis.app.cm.domain.model.CoinModel;
import vn.louis.app.cm.ui.common.AbsFragment;
import vn.louis.app.cm.ui.common.Response;
import vn.louis.app.cm.ui.home.HomeShareViewModel;
import vn.louis.app.cm.ui.utils.ViewModelFactory;

public class TickersFragment extends AbsFragment {

    @Inject
    ViewModelFactory mViewModelFactory;
    private HomeShareViewModel mViewModel;
    private TickersAdapter mTickerAdapter;
    private CompositeDisposable mDisposables = new CompositeDisposable();

    @Inject
    public TickersFragment() {

    }

    @Override
    public void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setHasOptionsMenu(true);
        mViewModel = ViewModelProviders.of(this, mViewModelFactory).get(HomeShareViewModel.class);
    }

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View rootView = inflater.inflate(R.layout.fragment_tickers, container, false);
//        Toolbar toolbar = rootView.findViewById(R.id.toolbar);
//                toolbar.inflateMenu(R.menu.menu_movie);
//        toolbar.setOnMenuItemClickListener { ->
//            onOptionsItemSelected(it)
//        }
        mTickerAdapter = new TickersAdapter();
        RecyclerView tickersList = rootView.findViewById(R.id.tickersList);
        tickersList.setLayoutManager(new LinearLayoutManager(this.getContext(), LinearLayoutManager.HORIZONTAL, false));
        tickersList.setAdapter(mTickerAdapter);

        mViewModel.loadTickers();
        mViewModel.getState().observe(this, state -> {
            assert state != null;
            processState((Response) state);
        });

        return rootView;
    }

    @Override
    public void onResume() {
        super.onResume();
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        mDisposables.clear();
    }

    private void processState(Response state) {
        switch (state.status) {
            case LOADING:
                break;
            case SUCCESS:
                assert state.data != null;
                mDisposables.add(mTickerAdapter.bindData(Observable.just((List<CoinModel>) state.data)));
                break;
            case ERROR:
                break;
        }
    }
}
