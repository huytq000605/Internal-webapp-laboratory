import { FileUpload } from 'graphql-upload';
import { Service } from 'typedi';
import slugify from 'slugify';
import { nanoid } from 'nanoid';
import { UploadRepository } from '../repositories/UploadRepository';

export const normalizeFileName = (fileName: string): string => {
	return slugify(fileName, {
		replacement: '_',
		lower: true,
		locale: 'vi',
	});
};

export const makeUniqueName = (name: string): string => {
	const uniquePart = nanoid();
	return `${uniquePart}__${Date.now()}__${name}`;
};

export const isAcceptedFileName = (fileName: string): void => {
	if (!/.*\.(jpg|png|docx|doc|ppt|pptx)/i.test(fileName)) {
		throw new Error('filename is invalid');
	}
};

@Service()
export class UploadService {
	constructor(private readonly uploadRepository: UploadRepository) {}
	async uploadFile({ filename, ...restFile }: FileUpload) {
		isAcceptedFileName(filename);
		const fileUrl = await this.uploadRepository.saveFile({
			filename: makeUniqueName(normalizeFileName(filename)),
			...restFile,
		});
		return {
			path: `http://localhost:${process.env.PORT}/${fileUrl.path}`,
			id: fileUrl.id,
		};
	}
	async getTemporaryFiles(): Promise<{ path: string; id: string }[]> {
		const fileUrls = await this.uploadRepository.getTmpFiles();

		return fileUrls.map((fileUrl) => {
			const path =
				process.env.NODE_ENV === 'development'
					? `http://localhost:${process.env.PORT}/${fileUrl.path}`
					: `/static-resources/${fileUrl.path}`;
			return {
				path,
				id: fileUrl.id,
			};
		});
	}
	async deleteFile(filename: string): Promise<boolean> {
		try {
			return await this.uploadRepository.deleteFile(filename);
		} catch (error) {
			if (/no such file or directory/.test(error.message)) {
				throw new Error('File không tồn tại');
			}
			throw error;
		}
	}
}
