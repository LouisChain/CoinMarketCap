package vn.louis.app.cm.data.di;

import com.google.gson.FieldNamingPolicy;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.util.Collections;
import java.util.concurrent.TimeUnit;

import javax.inject.Singleton;

import dagger.Module;
import dagger.Provides;
import vn.louis.app.cm.data.local.MVVMDatabase;
import vn.louis.app.cm.data.local.TickerLocalServiceImpl;
import vn.louis.app.cm.data.remote.HttpService;
import vn.louis.app.cm.data.remote.TickerApiServiceImpl;
import vn.louis.app.cm.domain.service.TickerApiService;
import vn.louis.app.cm.domain.service.TickerLocalService;
import okhttp3.OkHttpClient;
import okhttp3.Protocol;
import okhttp3.logging.HttpLoggingInterceptor;
import retrofit2.Retrofit;
import retrofit2.adapter.rxjava2.RxJava2CallAdapterFactory;
import retrofit2.converter.gson.GsonConverterFactory;

@Module
public class DataModule {

    @Provides
    @Singleton
    public Retrofit provideRetrofit(Gson gson) {
        HttpLoggingInterceptor loggingInterceptor = new HttpLoggingInterceptor();
        loggingInterceptor.setLevel(HttpLoggingInterceptor.Level.BODY);

        OkHttpClient okHttpClient = new OkHttpClient.Builder()
                .connectTimeout(30, TimeUnit.SECONDS)
                .readTimeout(35, TimeUnit.SECONDS)
                .addInterceptor(loggingInterceptor)
                .protocols(Collections.singletonList(Protocol.HTTP_1_1))
                .build();

        return new Retrofit.Builder()
                .baseUrl("https://api.coinmarketcap.com/v2/")
                .addConverterFactory(GsonConverterFactory.create(gson))
                .addCallAdapterFactory(RxJava2CallAdapterFactory.create())
                .client(okHttpClient)
                .build();
    }

    @Provides
    @Singleton
    public Gson provideGson() {
        GsonBuilder gsonBuilder = new GsonBuilder();
        gsonBuilder.setFieldNamingPolicy(FieldNamingPolicy.LOWER_CASE_WITH_UNDERSCORES);
        return gsonBuilder.create();
    }

    @Provides
    public TickerLocalService provideTickerLocalService(MVVMDatabase database) {
        return new TickerLocalServiceImpl(database);
    }

    @Provides
    public TickerApiService provideTickerApiService(Retrofit retrofit) {
        return new TickerApiServiceImpl(retrofit.create(HttpService.class));
    }
}
