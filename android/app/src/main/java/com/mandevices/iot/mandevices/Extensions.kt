import android.app.Activity
import android.app.Application
import timber.log.Timber

fun Activity.logInfo(message: String) {
	Timber.i(message)
}

fun Activity.logError(message: String) {
	Timber.e(message)
}

fun Application.logInfo(message: String) {
	Timber.i(message)
}