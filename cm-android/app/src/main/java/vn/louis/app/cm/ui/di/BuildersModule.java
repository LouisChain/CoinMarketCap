package vn.louis.app.cm.ui.di;

import dagger.Module;
import dagger.android.ContributesAndroidInjector;
import vn.louis.app.cm.ui.flash.FlashActivity;
import vn.louis.app.cm.ui.home.HomeTabActivity;
import vn.louis.app.cm.ui.home.HomeTabModule;

/**
 * Binds all sub-components within the app.
 */
@Module
public abstract class BuildersModule {

    @ContributesAndroidInjector(modules = HomeTabModule.class)
    abstract HomeTabActivity contributeHomeTabActivity();

    @ContributesAndroidInjector
    abstract FlashActivity contributeFlashActivity();

    // Add bindings for other sub-components here
}
