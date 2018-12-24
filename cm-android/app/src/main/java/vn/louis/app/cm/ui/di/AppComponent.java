package vn.louis.app.cm.ui.di;

import javax.inject.Singleton;

import dagger.Component;
import dagger.android.AndroidInjectionModule;
import vn.louis.app.cm.ui.common.App;

/* Use AndroidInjectionModule.class if you're not using support library */
@Singleton
@Component(modules = {AndroidInjectionModule.class, BuildersModule.class, AppModule.class})
public interface AppComponent {

    void inject(App app);

}
