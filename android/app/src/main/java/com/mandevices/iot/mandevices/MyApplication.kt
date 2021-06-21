package com.mandevices.iot.mandevices

import android.app.Activity
import android.app.Application
import android.os.Bundle
import android.os.StrictMode
import logInfo
import timber.log.Timber

class MyApplication : Application() {
	override fun onCreate() {
		super.onCreate()

		if (BuildConfig.DEBUG) {
			StrictMode.enableDefaults()
			Timber.plant(Timber.DebugTree())
		}

		logInfo("Creating Application")

		registerActivityLifecycleCallbacks(object : ActivityLifecycleCallbacks {
			override fun onActivityCreated(activity: Activity, savedInstanceState: Bundle?) {
				logInfo(activity.javaClass.simpleName + " created")
			}

			override fun onActivityStarted(activity: Activity) {
				logInfo(activity.javaClass.simpleName + " started")
			}

			override fun onActivityResumed(activity: Activity) {
				logInfo(activity.javaClass.simpleName + " resumed")
			}

			override fun onActivityPaused(activity: Activity) {
				logInfo(activity.javaClass.simpleName + " paused")
			}

			override fun onActivityStopped(activity: Activity) {
				logInfo(activity.javaClass.simpleName + " stopped")
			}

			override fun onActivitySaveInstanceState(activity: Activity, outState: Bundle) {
				logInfo(activity.javaClass.simpleName + " saved")
			}

			override fun onActivityDestroyed(activity: Activity) {
				logInfo(activity.javaClass.simpleName + " destroyed")
			}

		})
	}
}