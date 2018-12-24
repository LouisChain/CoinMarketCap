package vn.louis.app.cm.ui.common;

import android.support.annotation.NonNull;
import android.support.v7.widget.RecyclerView;
import android.view.View;

public abstract class AbsRecyclerHolder<D> extends RecyclerView.ViewHolder {

    public AbsRecyclerHolder(@NonNull View itemView) {
        super(itemView);
    }

    protected abstract void onBindData(D data);
}
