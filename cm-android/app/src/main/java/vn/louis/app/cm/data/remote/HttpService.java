package vn.louis.app.cm.data.remote;

import java.util.List;

import io.reactivex.Flowable;
import retrofit2.http.GET;
import vn.louis.app.cm.data.remote.response.PluralApiResponse;
import vn.louis.app.cm.domain.model.CoinModel;

public interface HttpService {

    @GET("/v2/ticker/?structure=array&limit=100")
    Flowable<PluralApiResponse<List<CoinModel>>> getTickers();
}
