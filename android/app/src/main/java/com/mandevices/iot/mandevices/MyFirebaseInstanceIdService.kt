package com.mandevices.iot.mandevices

import android.util.Log
import com.google.firebase.messaging.FirebaseMessagingService

class MyFirebaseInstanceIdService : FirebaseMessagingService() {
	override fun onNewToken(token: String) {
		Log.i("FirebaseToken", token)
	}
}