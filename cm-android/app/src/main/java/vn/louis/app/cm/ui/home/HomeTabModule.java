package vn.louis.app.cm.ui.home;

import dagger.Module;
import dagger.android.ContributesAndroidInjector;
import vn.louis.app.cm.ui.home.global.GlobalFragment;
import vn.louis.app.cm.ui.home.profile.ProfileFragment;
import vn.louis.app.cm.ui.home.ticker.TickersFragment;

@Module
public abstract class HomeTabModule {

    @ContributesAndroidInjector
    abstract TickersFragment contributeTickersFragment();

    @ContributesAndroidInjector
    abstract GlobalFragment contributeGlobalFragment();

    @ContributesAndroidInjector
    abstract ProfileFragment contributeProfileFragment();
}
