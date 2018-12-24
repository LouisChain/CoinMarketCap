package vn.louis.app.cm.ui.common;

import android.arch.lifecycle.Lifecycle;
import android.arch.lifecycle.LifecycleOwner;
import android.arch.lifecycle.LifecycleRegistry;
import android.databinding.ViewDataBinding;
import android.support.annotation.NonNull;

public abstract class LifecycleViewHolder<D, V extends ViewDataBinding> extends AbsRecyclerHolder<D> implements LifecycleOwner {

    private final LifecycleRegistry lifecycleRegistry = new LifecycleRegistry(this);

    protected V binding;

    public LifecycleViewHolder(@NonNull V itemView) {
        super(itemView.getRoot());
        binding = itemView;
        lifecycleRegistry.markState(Lifecycle.State.INITIALIZED);
    }

    public void onCreate() {
        lifecycleRegistry.markState(Lifecycle.State.CREATED);
    }

    public void onStart() {
        lifecycleRegistry.markState(Lifecycle.State.STARTED);
    }

    public void onResume() {
        lifecycleRegistry.markState(Lifecycle.State.RESUMED);
    }

    public void onDestroy() {
        lifecycleRegistry.markState(Lifecycle.State.DESTROYED);
    }

    @Override
    public Lifecycle getLifecycle() {
        return lifecycleRegistry;
    }
}
