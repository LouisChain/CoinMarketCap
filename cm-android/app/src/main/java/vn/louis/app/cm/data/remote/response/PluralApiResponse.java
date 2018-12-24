package vn.louis.app.cm.data.remote.response;

public class PluralApiResponse<T> {

    T data;

    public void setData(T data) {
        this.data = data;
    }

    public T getData() {
        return data;
    }
}
