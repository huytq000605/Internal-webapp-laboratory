import {
	Mutation,
	Resolver,
	Arg,
	ObjectType,
	Field,
	Query,
} from 'type-graphql';
import { FileUpload, GraphQLUpload } from 'graphql-upload';
import { Service } from 'typedi';
import { UploadService } from '../services/UploadService';

@ObjectType()
class FileMedia {
	@Field()
	id!: string;
	@Field()
	path!: string;
}

@Service()
@Resolver()
export class UploadApi {
	constructor(private readonly uploadService: UploadService) {}

	@Query(() => [FileMedia])
	async temporaryUploadFiles(): Promise<FileMedia[]> {
		const fileUrls = await this.uploadService.getTemporaryFiles();
		return fileUrls.map((fileUrl) => {
			return { path: fileUrl.path, id: fileUrl.id };
		});
	}

	@Mutation(() => FileMedia)
	async upload(
		@Arg('file', () => GraphQLUpload, { nullable: true }) file: FileUpload
	): Promise<FileMedia> {
		try {
			const fileUrl = await this.uploadService.uploadFile(file);
			return { path: fileUrl.path, id: fileUrl.id };
		} catch (error) {
			throw new Error(error);
		}
	}
	@Mutation(() => Boolean)
	async deleteImage(@Arg('id') id: string): Promise<boolean> {
		try {
			console.log('id', id);
			return this.uploadService.deleteFile(id);
		} catch (error) {
			throw new Error(error);
		}
	}
}
