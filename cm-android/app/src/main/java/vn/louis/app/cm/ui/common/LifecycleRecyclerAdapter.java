package vn.louis.app.cm.ui.common;

import android.databinding.ViewDataBinding;
import android.support.annotation.NonNull;
import android.support.v7.widget.RecyclerView;

import java.util.ArrayList;
import java.util.List;

public abstract class LifecycleRecyclerAdapter<D, VH extends LifecycleViewHolder<D, ? extends ViewDataBinding>> extends RecyclerView.Adapter<VH> {

    protected List<D> mDataSource = new ArrayList<>();

    @Override
    public int getItemCount() {
        return mDataSource.size();
    }

    @Override
    public void onViewAttachedToWindow(@NonNull VH holder) {
        super.onViewAttachedToWindow(holder);
        holder.onCreate();
        holder.onStart();
    }

    @Override
    public void onViewDetachedFromWindow(@NonNull VH holder) {
        super.onViewDetachedFromWindow(holder);
        holder.onDestroy();
    }

    protected D getItem(int position) {
        return mDataSource.get(position);
    }
}
