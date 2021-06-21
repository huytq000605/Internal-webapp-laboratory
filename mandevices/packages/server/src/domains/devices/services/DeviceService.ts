import { GraphqlContext } from '@root/global';
import { MongoDataSource } from 'apollo-datasource-mongodb';
import { Db, ObjectId } from 'mongodb';
import { Service, Container } from 'typedi';
import {
	Device,
	DeviceCreateInput,
	DeviceEditInput,
	DeviceOptions,
} from '../api/DeviceApi';
import { DATABASE_INSTANCE_KEY } from '@root/config';
import { UploadService } from '@root/domains/uploads/services/UploadService';
import query from '@root/utils/query';

@Service()
export class DeviceService extends MongoDataSource<Device, GraphqlContext> {
	constructor(private readonly uploadService: UploadService) {
		super(
			(Container.get(DATABASE_INSTANCE_KEY) as Db).collection(
				'devices'
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
			) as any
		);
	}

	async device(id: string, user: GraphqlContext['user']) {
		if (!user) throw new Error('User undefined');
		const result = this.collection.findOne({ _id: id });
		return result;
	}

	async devices(options: DeviceOptions, user: GraphqlContext['user']) {
		if (!user) throw new Error('User undefined');
		if (!options) (options as Record<string, unknown>) = {};
		const result = await query(this.collection, options);
		return result;
	}

	async createDevice(
		device: DeviceCreateInput,
		user: GraphqlContext['user']
	) {
		if (!user) throw new Error('User undefined');
		const _id = new ObjectId();
		const shouldBeInsertedDevice = {
			...device,
			createdAt: _id.getTimestamp(),
			createdBy: user,
			_id: _id.toHexString(),
		};
		const result = await this.collection.insertOne(shouldBeInsertedDevice);
		return result.ops[0];
	}

	async editDevice(device: DeviceEditInput, user: GraphqlContext['user']) {
		if (!user) throw new Error('User undefined');
		const { _id, ...data } = device;
		const currentDevice = await this.collection.findOne({ _id: _id });
		if (currentDevice?.image && device.image) {
			this.uploadService.deleteFile(currentDevice.image.id);
		}
		const result = await this.collection.findOneAndUpdate(
			{ _id: _id },
			{ $set: { ...data } }
		);
		return result.value;
	}

	async deleteDevice(id: string, user: GraphqlContext['user']) {
		if (!user) throw new Error('User undefined');
		const result = await this.collection.findOneAndDelete({
			_id: id,
		});
		if (!result.value) throw new Error('No device found');
		if (result.value.image) {
			this.uploadService.deleteFile(result.value.image.id);
		}
		return result.value;
	}

	async createDevices(
		devices: DeviceCreateInput[],
		user: GraphqlContext['user']
	) {
		if (!user) throw new Error('User undefined');
		const insertingDevices = [];

		for (const device of devices) {
			const _id = new ObjectId();
			const shouldBeInsertedDevice = {
				...device,
				_id: _id.toHexString(),
				createdAt: _id.getTimestamp(),
				createdBy: user,
			};
			insertingDevices.push(shouldBeInsertedDevice);
		}
		const result = await this.collection.insertMany(insertingDevices);
		return result.ops;
	}
}
