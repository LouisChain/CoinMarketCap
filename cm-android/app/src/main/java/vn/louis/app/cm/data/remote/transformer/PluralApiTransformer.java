package vn.louis.app.cm.data.remote.transformer;

import org.reactivestreams.Publisher;

import io.reactivex.Flowable;
import io.reactivex.FlowableTransformer;
import vn.louis.app.cm.data.remote.response.PluralApiResponse;

public class PluralApiTransformer<T> implements FlowableTransformer<PluralApiResponse<T>, T> {
    @Override
    public Publisher<T> apply(Flowable<PluralApiResponse<T>> upstream) {
        return upstream.flatMap(response -> {
            if (response != null) {
                return Flowable.just(response.getData());
            } else {
                return Flowable.just(null);
            }
        });
    }
}
