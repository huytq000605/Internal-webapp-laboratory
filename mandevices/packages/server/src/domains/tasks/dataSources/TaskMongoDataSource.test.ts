/**
 * @jest-environment <rootDir>/src/config/mongo-test-environment
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Db } from 'mongodb';
import { Container } from 'typedi';

import { TaskMongoDataSource } from './TaskMongoDataSource';
import { DATABASE_INSTANCE_KEY } from '@root/config';

const mongoDb: Db = (global as any).db;
Container.set(DATABASE_INSTANCE_KEY, mongoDb);
const dataSource: TaskMongoDataSource = new TaskMongoDataSource();

describe('TaskMongoDatasource', () => {
	describe('createTask', () => {
		it('should insert task successfully', async () => {
			const createResult = await dataSource.createTask({
				title: 'foo',
				ownerId: '1',
			});

			expect(createResult.createdAt).toEqual(expect.any(Date));
			expect(createResult._id).toEqual(expect.any(String));

			const actualResult = await mongoDb.collection('tasks').findOne({
				_id: createResult._id,
			});

			expect(createResult).toEqual(actualResult);
		});
	});

	describe('updateTask', () => {
		it('should update task successfully', async () => {
			const insertResult = await mongoDb.collection('tasks').insertOne({
				ownerId: '1',
				title: 'title',
			});

			const updateResult = await dataSource.updateTask({
				_id: insertResult.insertedId,
				ownerId: '1',
				title: 'new title',
			});

			const actualUpdateResult = await mongoDb
				.collection('tasks')
				.findOne({ _id: insertResult.insertedId });

			expect(updateResult).toEqual(actualUpdateResult);
		});
	});
});
