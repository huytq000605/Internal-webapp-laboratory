class FileUtil {
	isImage<T extends { mimetype: string }>(file: T): boolean {
		if (
			file.mimetype !== 'image/jpeg' &&
			file.mimetype !== 'image/png' &&
			file.mimetype !== 'image/jpg' &&
			file.mimetype !== 'image/svg+xml'
		)
			return false;
		return true;
	}
}

export const fileUtil = new FileUtil();
