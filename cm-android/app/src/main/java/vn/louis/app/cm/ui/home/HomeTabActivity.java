package vn.louis.app.cm.ui.home;

import android.arch.lifecycle.ViewModelProviders;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.design.widget.BottomNavigationView;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentPagerAdapter;
import android.support.v4.view.ViewPager;
import android.view.Menu;
import android.view.MenuItem;

import javax.inject.Inject;

import dagger.android.AndroidInjection;
import vn.louis.app.cm.R;
import vn.louis.app.cm.databinding.ActivityHomeTabBinding;
import vn.louis.app.cm.ui.common.AbsActivity;
import vn.louis.app.cm.ui.home.global.GlobalFragment;
import vn.louis.app.cm.ui.home.profile.ProfileFragment;
import vn.louis.app.cm.ui.home.ticker.TickersFragment;
import vn.louis.app.cm.ui.utils.Constants;
import vn.louis.app.cm.ui.utils.ViewModelFactory;

public class HomeTabActivity extends AbsActivity<ActivityHomeTabBinding> {

    @Inject
    ViewModelFactory mViewModelFactory;
    private HomeShareViewModel mViewModel;

    @Inject
    TickersFragment mTickersFragment;
    @Inject
    GlobalFragment mGlobalFragment;
    @Inject
    ProfileFragment mProfileFragment;

    private SectionsPagerAdapter mSectionPagerAdapter;

    @Override
    protected int getViewId() {
        return R.layout.activity_home_tab;
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        AndroidInjection.inject(this);
        super.onCreate(savedInstanceState);
        mViewModel = ViewModelProviders.of(this, mViewModelFactory).get(HomeShareViewModel.class);

        mSectionPagerAdapter = new SectionsPagerAdapter(getSupportFragmentManager());
        binding.container.setAdapter(mSectionPagerAdapter);
        binding.container.addOnPageChangeListener(new SectionsPageChangeListener());
        binding.navigation.setOnNavigationItemSelectedListener(new BottomNavigationListener());
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        return super.onCreateOptionsMenu(menu);
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        return super.onOptionsItemSelected(item);
    }

    class BottomNavigationListener implements BottomNavigationView.OnNavigationItemSelectedListener {

        @Override
        public boolean onNavigationItemSelected(@NonNull MenuItem menuItem) {
            switch (menuItem.getItemId()) {
                case R.id.navigation_tickers:
                    binding.container.setCurrentItem(Constants.HomeTab.TICKERS_TAB);
                    return true;
                case R.id.navigation_global:
                    binding.container.setCurrentItem(Constants.HomeTab.GLOBAL_TAB);
                    return true;

                case R.id.navigation_profile:
                    binding.container.setCurrentItem(Constants.HomeTab.PROFILE_TAB);
                    return true;
            }
            return false;
        }
    }


    class SectionsPageChangeListener implements ViewPager.OnPageChangeListener {

        @Override
        public void onPageScrolled(int position, float positionOffset, int positionOffsetPixels) {

        }

        @Override
        public void onPageSelected(int position) {

        }

        @Override
        public void onPageScrollStateChanged(int state) {

        }
    }


    /**
     * A [FragmentPagerAdapter] that returns a fragment corresponding to
     * one of the sections/tabs/pages.
     */
    class SectionsPagerAdapter extends FragmentPagerAdapter {

        private final FragmentManager fm;

        public SectionsPagerAdapter(FragmentManager fm) {
            super(fm);
            this.fm = fm;
        }

        @Override
        public Fragment getItem(int i) {
            switch (i) {
                case Constants.HomeTab.TICKERS_TAB:
                    return mTickersFragment;

                case Constants.HomeTab.GLOBAL_TAB:
                    return mGlobalFragment;

                case Constants.HomeTab.PROFILE_TAB:
                    return mProfileFragment;

                default:
                    return mTickersFragment;
            }
        }

        @Override
        public int getCount() {
            return Constants.HomeTab.COUNT;
        }
    }
}
