package com.mandevices.iot.mandevices

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.google.firebase.installations.FirebaseInstallations
import logError
import logInfo

class MainActivity : AppCompatActivity() {
	override fun onCreate(savedInstanceState: Bundle?) {
		super.onCreate(savedInstanceState)
		setContentView(R.layout.activity_main)

		FirebaseInstallations.getInstance().id.addOnCompleteListener { task ->
			if (task.isSuccessful) {
				logInfo("Retrieved Firebase Identifier success")
			} else {
				logError("Retrieved Firebase Identifier fail")
			}
		}
	}
}