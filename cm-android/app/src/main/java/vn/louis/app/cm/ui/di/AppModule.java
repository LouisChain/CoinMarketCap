package vn.louis.app.cm.ui.di;

import android.app.Application;
import android.content.Context;
import android.content.res.Resources;

import javax.inject.Singleton;

import dagger.Module;
import dagger.Provides;
import vn.louis.app.cm.data.di.DataModule;
import vn.louis.app.cm.data.local.MVVMDatabase;
import vn.louis.app.cm.domain.di.UseCaseModule;

@Module(includes = {DataModule.class, UseCaseModule.class})
public class AppModule {

    final Application mApp;

    public AppModule(Application mApp) {
        this.mApp = mApp;
    }

    @Provides
    @Singleton
    public Context provideAppContext() {
        return mApp;
    }

    @Provides
    @Singleton
    public Resources provideResource(Application app) {
        return app.getResources();
    }

    @Provides
    @Singleton
    public MVVMDatabase provideMVVMDatabase() {
        return MVVMDatabase.getDatabase(provideAppContext());
    }
}
