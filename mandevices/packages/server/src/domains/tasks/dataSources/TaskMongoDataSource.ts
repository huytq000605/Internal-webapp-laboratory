import { DATABASE_INSTANCE_KEY, logger } from '@root/config';
import { GraphqlContext } from '@root/global';
import { MongoDataSource } from 'apollo-datasource-mongodb';
import { Db, ObjectId } from 'mongodb';

import {
	TaskPersistentDataSource,
	Task,
	TASK_PERISTENT_DATA_SOURCE,
} from '../repositories/TaskRepository';
import Container, { Service } from 'typedi';

@Service(TASK_PERISTENT_DATA_SOURCE)
export class TaskMongoDataSource
	extends MongoDataSource<Task, GraphqlContext>
	implements TaskPersistentDataSource {
	/**
	 * For testing only
	 * @param user GraphqlContext['user']
	 */
	init(user: GraphqlContext['user']) {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		if (!this.context) this.context = {} as any;
		this.context.user = user;
	}

	constructor() {
		super(
			(Container.get(DATABASE_INSTANCE_KEY) as Db).collection(
				'tasks'
			) as any
		);
	}

	getTasksByUser: TaskPersistentDataSource['getTasksByUser'] = async (
		userId
	) => {
		const result = await this.collection.find({ ownerId: userId });
		return result.toArray();
	};
	getTaskById: TaskPersistentDataSource['getTaskById'] = async (id) => {
		const result = await this.collection.findOne({ _id: id });
		if (!result) throw new Error('Task not found');
		return result;
	};

	createTask: TaskPersistentDataSource['createTask'] = async (input) => {
		try {
			const id = new ObjectId();
			const result = await this.collection.insertOne({
				...input,
				_id: id.toHexString(),
				createdAt: id.getTimestamp(),
			});

			return result.ops[0];
		} catch (error) {
			logger.error(error);
			throw new Error(error);
		}
	};

	updateTask: TaskPersistentDataSource['updateTask'] = async (task) => {
		const { _id, ...data } = task;

		const updatedTaskResponse = await this.collection.findOneAndUpdate(
			{
				_id,
			},
			{
				$set: data,
			},
			{
				returnOriginal: false,
			}
		);

		if (!updatedTaskResponse.value) throw new Error('Task not found');

		return updatedTaskResponse.value;
	};
	deleteTask: TaskPersistentDataSource['deleteTask'] = async (input) => {
		try {
			const { _id } = input;

			const result = await this.collection.findOneAndDelete({
				_id,
			});
			if (!result.value) throw new Error('Nhiệm vụ không tồn tại');
			return result.value;
		} catch (error) {
			logger.error(error);
			throw new Error(error);
		}
	};
}
