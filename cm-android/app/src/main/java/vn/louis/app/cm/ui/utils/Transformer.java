package vn.louis.app.cm.ui.utils;

import android.os.Build;
import android.os.Looper;

import io.reactivex.CompletableTransformer;
import io.reactivex.FlowableTransformer;
import io.reactivex.ObservableTransformer;
import io.reactivex.Scheduler;
import io.reactivex.SingleTransformer;
import io.reactivex.android.schedulers.AndroidSchedulers;
import io.reactivex.schedulers.Schedulers;

public class Transformer {

    private static SchedulerManager sComputationScheduler = new SchedulerManager(Schedulers::computation);

    private static SchedulerManager sIoScheduler = new SchedulerManager(Schedulers::io);

    private static SchedulerManager sMainThreadScheduler = new SchedulerManager(AndroidSchedulers::mainThread);

    private static SchedulerManager sNewThreadScheduler = new SchedulerManager(Schedulers::newThread);

    public static CompletableTransformer applyCompletableComputationTransformer() {
        return completable -> completable
                .subscribeOn(sComputationScheduler.get())
                .observeOn(sMainThreadScheduler.get());
    }

    public static CompletableTransformer applyCompletableIoTransformer() {
        return completable -> completable
                .subscribeOn(sIoScheduler.get())
                .observeOn(sMainThreadScheduler.get());
    }

    public static CompletableTransformer applyCompletableMainThreadScheduler() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            if (Looper.getMainLooper().isCurrentThread()) {
                return completable -> completable;
            }
        } else {
            if (Thread.currentThread() == Looper.getMainLooper().getThread()) {
                return completable -> completable;
            }
        }
        return completable -> completable
                .subscribeOn(sMainThreadScheduler.get())
                .observeOn(sMainThreadScheduler.get());
    }

    public static CompletableTransformer applyCompletableNewThreadTransformer() {
        return completable -> completable
                .subscribeOn(sNewThreadScheduler.get())
                .observeOn(sMainThreadScheduler.get());
    }

    public static <T> ObservableTransformer<T, T> applyComputationScheduler() {
        return observable -> observable
                .subscribeOn(sComputationScheduler.get())
                .observeOn(sMainThreadScheduler.get());
    }

    public static <T> FlowableTransformer<T, T> applyIoScheduler() {
        return flowable -> flowable
                .subscribeOn(sIoScheduler.get())
                .observeOn(sMainThreadScheduler.get());
    }

    public static <T> ObservableTransformer<T, T> applyMainThreadScheduler() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            if (Looper.getMainLooper().isCurrentThread()) {
                return observable -> observable;
            }
        } else {
            if (Thread.currentThread() == Looper.getMainLooper().getThread()) {
                return observable -> observable;
            }
        }
        return observable -> observable
                .subscribeOn(sMainThreadScheduler.get())
                .observeOn(sMainThreadScheduler.get());
    }

    public static <T> ObservableTransformer<T, T> applyNewThreadScheduler() {
        return observable -> observable
                .subscribeOn(sNewThreadScheduler.get())
                .observeOn(sMainThreadScheduler.get());
    }

    public static <T> SingleTransformer<T, T> applySingleComputationScheduler() {
        return single -> single
                .subscribeOn(sComputationScheduler.get())
                .observeOn(sMainThreadScheduler.get());
    }

    public static <T> SingleTransformer<T, T> applySingleIoScheduler() {
        return single -> single
                .subscribeOn(sIoScheduler.get())
                .observeOn(sMainThreadScheduler.get());
    }

    public static <T> SingleTransformer<T, T> applySingleMainThreadScheduler() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            if (Looper.getMainLooper().isCurrentThread()) {
                return single -> single;
            }
        } else {
            if (Thread.currentThread() == Looper.getMainLooper().getThread()) {
                return single -> single;
            }
        }
        return single -> single
                .subscribeOn(sMainThreadScheduler.get())
                .observeOn(sMainThreadScheduler.get());
    }

    public static <T> SingleTransformer<T, T> applySingleNewThreadScheduler() {
        return single -> single
                .subscribeOn(sNewThreadScheduler.get())
                .observeOn(sMainThreadScheduler.get());
    }

    public static void overrideComputationScheduler(Scheduler scheduler) {
        sComputationScheduler.set(scheduler);
    }

    public static void overrideIoScheduler(Scheduler scheduler) {
        sIoScheduler.set(scheduler);
    }

    public static void overrideMainThreadScheduler(Scheduler scheduler) {
        sMainThreadScheduler.set(scheduler);
    }

    public static void overrideNewThreadScheduler(Scheduler scheduler) {
        sNewThreadScheduler.set(scheduler);
    }

    public static void resetComputationScheduler() {
        sComputationScheduler.reset();
    }

    public static void resetIoScheduler() {
        sIoScheduler.reset();
    }

    public static void resetMainThreadScheduler() {
        sMainThreadScheduler.reset();
    }

    public static void resetNewThreadScheduler() {
        sNewThreadScheduler.reset();
    }

    private Transformer() {
    }

    private static class SchedulerManager {

        private Callback mDefaultSchedulerCallback;

        private Scheduler mScheduler;

        public SchedulerManager(Callback defaultSchedulerCallback) {
            mDefaultSchedulerCallback = defaultSchedulerCallback;
        }

        public Scheduler get() {
            return mScheduler != null ? mScheduler : mDefaultSchedulerCallback.get();
        }

        public void reset() {
            set(null);
        }

        public void set(Scheduler scheduler) {
            mScheduler = scheduler;
        }

        private interface Callback {

            Scheduler get();
        }
    }
}
