package vn.louis.app.cm.ui.common;

import android.support.annotation.NonNull;
import android.support.annotation.Nullable;

import static vn.louis.app.cm.ui.common.Status.ERROR;
import static vn.louis.app.cm.ui.common.Status.LOADING;
import static vn.louis.app.cm.ui.common.Status.SUCCESS;

public class Response {

    public final Status status;

    @Nullable
    public final Object data;

    @Nullable
    public final Throwable error;

    private Response(Status status, @Nullable Object data, @Nullable Throwable error) {
        this.status = status;
        this.data = data;
        this.error = error;
    }

    public static Response loading() {
        return new Response(LOADING, null, null);
    }

    public static Response success(@NonNull Object data) {
        return new Response(SUCCESS, data, null);
    }

    public static Response error(@NonNull Throwable error) {
        return new Response(ERROR, null, error);
    }
}
