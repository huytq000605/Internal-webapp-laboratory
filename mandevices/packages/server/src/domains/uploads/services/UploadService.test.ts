import 'reflect-metadata';
import { FileUpload } from 'graphql-upload';
import {
	isAcceptedFileName,
	makeUniqueName,
	normalizeFileName,
} from './UploadService';

describe('UploadService', () => {
	const file: FileUpload = {
		filename: 'abc',
		mimetype: 'jpg/png',
		encoding: '7bit',
		createReadStream: jest.fn(),
	};

	describe('makeUniqueName', () => {
		it('should make two name unique become unique', () => {
			expect(makeUniqueName('canh')).not.toBe(makeUniqueName('canh'));
		});
	});

	describe('normalizeFileName', () => {
		it('should transform into a lower case string with underscores between words', () => {
			expect(normalizeFileName('Ng Cảnh 20@16')).toBe('ng_canh_20@16');
			expect(normalizeFileName('Ng-Cảnh,.2@16.jpg')).toBe(
				'ng-canh.2@16.jpg'
			);
		});
	});

	describe('isAcceptedFileName', () => {
		it('should throw error when filename not includes name and extension part', (done) => {
			try {
				isAcceptedFileName(file.filename);
			} catch (error) {
				expect(error).toBeDefined();
				done();
			}
		});

		it('should support extensions: jpg, png, docx, doc, ppt, pptx', (done) => {
			try {
				file.filename = 'fake.png';
				isAcceptedFileName(file.filename);

				file.filename = 'fake.png';
				isAcceptedFileName(file.filename);

				file.filename = 'fake.docx';
				isAcceptedFileName(file.filename);

				file.filename = 'fake.doc';
				isAcceptedFileName(file.filename);

				file.filename = 'fake.ppt';
				isAcceptedFileName(file.filename);

				file.filename = 'fake.pptx';
				isAcceptedFileName(file.filename);

				done();
			} catch (error) {
				expect(error).toBeUndefined();
			}
		});
	});
});
