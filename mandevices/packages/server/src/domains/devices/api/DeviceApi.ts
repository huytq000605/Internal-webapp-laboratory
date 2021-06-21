import { logger } from '@root/config';
import { UploadService } from '@root/domains/uploads/services/UploadService';
import { GraphqlContext } from '@root/global';
import { ApolloError } from 'apollo-server-express';
import { FileUpload, GraphQLUpload } from 'graphql-upload';
import {
	Arg,
	Authorized,
	Ctx,
	Field,
	ID,
	InputType,
	Mutation,
	ObjectType,
	Query,
	Resolver,
} from 'type-graphql';
import { Service } from 'typedi';
// import { User } from '../../../global';
import { DeviceService } from '../services/DeviceService';
import { fileUtil } from '@root/utils/fileutil';
import { Length } from 'class-validator';
import { UserGraphQLContext } from '@root/domains/users/api/UserApi';

@ObjectType()
@InputType('ImageInput')
class Image {
	@Field()
	id!: string;

	@Field()
	path!: string;
}

@ObjectType({ description: 'Device model' })
export class Device {
	@Field(() => ID)
	_id!: string;

	@Field()
	name!: string;

	@Field({ nullable: true })
	image?: Image;

	@Field({ nullable: true })
	model?: string;

	@Field()
	category!: string;

	@Field()
	createdBy!: UserGraphQLContext;

	@Field()
	createdAt!: Date;
}

@InputType()
export class DeviceCreateInput {
	@Field()
	@Length(1, 30)
	name!: string;

	@Field({ nullable: true })
	model?: string;

	@Field({ nullable: true })
	image?: Image;

	@Field()
	@Length(1, 30)
	category!: string;
}

@InputType()
export class DeviceEditInput {
	@Field(() => ID, { description: 'The id of device which will be editted' })
	_id!: string;

	@Field({ nullable: true })
	@Length(1, 30)
	name?: string;

	@Field({ nullable: true })
	model?: string;

	@Field({ nullable: true })
	image?: Image;

	@Field({ nullable: true })
	@Length(1, 30)
	category?: string;
}

@InputType()
class DeviceSort {
	@Field({ nullable: true })
	name?: 1 | -1;
	@Field({ nullable: true })
	category?: 1 | -1;
	@Field({ nullable: true })
	model?: 1 | -1;
}

@InputType()
class DeviceFilter {
	@Field({ nullable: true })
	name?: string;
	@Field({ nullable: true })
	category?: string;
	@Field({ nullable: true })
	model?: string;
}
@InputType()
export class DeviceOptions {
	@Field({ nullable: true })
	sort?: DeviceSort;

	@Field({ nullable: true })
	filter?: DeviceFilter;

	@Field({ nullable: true })
	numPage?: number;

	@Field({ nullable: true })
	perPage?: number;
}
@Service()
@Resolver()
export class DeviceResolver {
	constructor(
		private readonly deviceService: DeviceService,
		private readonly uploadService: UploadService
	) {}

	@Query(() => Device)
	@Authorized()
	async device(@Arg('input') input: string, @Ctx() ctx: GraphqlContext) {
		try {
			const result = await this.deviceService.device(input, ctx.user);
			return result;
		} catch (error) {
			logger.error(error);
			throw new ApolloError(error);
		}
	}

	@Query(() => [Device])
	@Authorized()
	async devices(
		@Ctx() ctx: GraphqlContext,
		@Arg('options', { nullable: true }) options: DeviceOptions
	) {
		try {
			const result = await this.deviceService.devices(options, ctx.user);
			return result;
		} catch (error) {
			logger.error(error);
			throw new ApolloError(error);
		}
	}

	@Mutation(() => Device)
	@Authorized()
	async createDevice(
		@Arg('input', { validate: true }) input: DeviceCreateInput,
		@Ctx() ctx: GraphqlContext,
		@Arg('file', () => GraphQLUpload, { nullable: true }) file: FileUpload
	) {
		try {
			if (file) {
				if (!fileUtil.isImage(file))
					throw new Error('Sai định dạng ảnh');
				const image = await this.uploadService.uploadFile(file);
				input = { ...input, image };
				const result = await this.deviceService.createDevice(
					input,
					ctx.user
				);
				return result;
			} else {
				const result = await this.deviceService.createDevice(
					input,
					ctx.user
				);
				return result;
			}
		} catch (error) {
			logger.error(error);
			throw new ApolloError(error);
		}
	}

	@Mutation(() => Device)
	@Authorized()
	async editDevice(
		@Arg('input', { validate: true }) input: DeviceEditInput,
		@Ctx() ctx: GraphqlContext,
		@Arg('file', () => GraphQLUpload, { nullable: true }) file: FileUpload
	) {
		try {
			if (file) {
				if (!fileUtil.isImage(file))
					throw new Error('Sai định dạng ảnh');
				const image = await this.uploadService.uploadFile(file);
				input = { ...input, image };
				const result = await this.deviceService.editDevice(
					input,
					ctx.user
				);
				return result;
			} else {
				const result = await this.deviceService.editDevice(
					input,
					ctx.user
				);
				return result;
			}
		} catch (error) {
			logger.error(error);
			throw new ApolloError(error);
		}
	}

	@Mutation(() => Device)
	@Authorized()
	async deleteDevice(
		@Arg('input') input: string,
		@Ctx() ctx: GraphqlContext
	) {
		try {
			const result = await this.deviceService.deleteDevice(
				input,
				ctx.user
			);
			return result;
		} catch (error) {
			logger.error(error);
			throw new ApolloError(error);
		}
	}

	@Mutation(() => [Device])
	@Authorized()
	async createDevices(
		@Arg('input', () => [DeviceCreateInput]) input: DeviceCreateInput[],
		@Ctx() ctx: GraphqlContext
	) {
		try {
			const result = await this.deviceService.createDevices(
				input,
				ctx.user
			);
			return result;
		} catch (error) {
			logger.error(error);
			throw new ApolloError(error);
		}
	}
}
