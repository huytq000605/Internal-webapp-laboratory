import { Service } from 'typedi';
import mkdirp from 'mkdirp';
import appRoot from 'app-root-path';
import { FileUpload } from 'graphql-upload';
import { createWriteStream, readdir, unlink } from 'fs';

@Service()
export class UploadRepository {
	private RELATIVE_PATH = 'tmp';
	private TEMPORARY_UPLOAD_PATH = `${appRoot.path}/packages/server/upload/${this.RELATIVE_PATH}`;

	async saveFile(file: FileUpload): Promise<{ path: string; id: string }> {
		await mkdirp(this.TEMPORARY_UPLOAD_PATH);
		const fileSavedPath = await new Promise<string>((resolve, reject) => {
			const imageUrl = `${this.TEMPORARY_UPLOAD_PATH}/${file.filename}`;
			file.createReadStream()
				.pipe(createWriteStream(imageUrl))
				.on('error', reject)
				.on('finish', () => {
					resolve(`${this.RELATIVE_PATH}/${file.filename}`);
				});
		});

		return { path: fileSavedPath, id: fileSavedPath.replace('tmp/', '') };
	}

	async getTmpFiles() {
		return new Promise<{ path: string; id: string }[]>(
			(resolve, reject) => {
				readdir(this.TEMPORARY_UPLOAD_PATH, (err, files) => {
					if (err) return reject(err);
					resolve(
						files.map((file) => ({
							path: `${this.RELATIVE_PATH}/${file}`,
							id: file,
						}))
					);
				});
			}
		);
	}
	async deleteFile(file: string) {
		return new Promise<boolean>((resolve, reject) => {
			unlink(`${this.TEMPORARY_UPLOAD_PATH}/${file}`, (err) => {
				if (err) return reject(err);
				resolve(true);
			});
		});
	}
}
