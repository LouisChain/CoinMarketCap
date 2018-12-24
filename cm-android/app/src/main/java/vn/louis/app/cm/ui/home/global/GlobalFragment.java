package vn.louis.app.cm.ui.home.global;

import android.arch.lifecycle.ViewModelProviders;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import javax.inject.Inject;

import vn.louis.app.cm.R;
import vn.louis.app.cm.ui.common.AbsFragment;
import vn.louis.app.cm.ui.home.HomeShareViewModel;
import vn.louis.app.cm.ui.utils.ViewModelFactory;

public class GlobalFragment extends AbsFragment {

    @Inject
    ViewModelFactory mViewModelFactory;
    private HomeShareViewModel mViewModel;

    @Inject
    public GlobalFragment() {
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
        View rootView = inflater.inflate(R.layout.fragment_global, container, false);

        return rootView;
    }
}
