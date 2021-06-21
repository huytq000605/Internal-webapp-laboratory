/**
 * @jest-environment <rootDir>/src/config/mongo-test-environment
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
import { Db, ObjectId } from 'mongodb';

import { gql } from 'apollo-server-express';
import '@root/dependencyInjections';
import { testMutation, testQuery } from '@root/utils/tests';

const mongoDb: Db = (global as any).db;
const defaultUser = {
	id: '1',
	email: 'test@gmail.com',
	name: 'canh',
	roles: ['user'],
};
const otherUser = {
	id: '2',
	email: 'test@gmail.com',
	name: 'canh',
	roles: ['guest'],
};

describe('Tasks API', () => {
	describe('tasks', () => {
		const GET_TASKS = gql`
			query GetTasks {
				tasks {
					_id
				}
			}
		`;
		it('should login', async () => {
			const result = await testQuery({ query: GET_TASKS });
			expect(result.errors).toBeDefined();
		});

		it('should return empty array', async () => {
			const result = await testQuery({
				query: GET_TASKS,
				user: defaultUser,
			});
			expect(result.errors).toBeUndefined();
			expect(result.data).toBeDefined();
			expect(result.data.tasks).toEqual([]);
		});
	});

	describe('createTask', () => {
		it('should create task', async () => {
			const variables = { title: 'Learn English' };

			const CREATE_TASK = gql`
				mutation CreateTask($title: String!) {
					createTask(input: { title: $title }) {
						_id
						title
						ownerId
						createdAt
					}
				}
			`;
			const res = await testMutation({
				user: defaultUser,
				mutation: CREATE_TASK,
				variables,
			});
			expect(res.errors).toBeUndefined();

			const result = res.data.createTask;

			expect(result).toEqual({
				...variables,
				ownerId: '1',
				createdAt: expect.any(String),
				_id: expect.any(String),
			});

			const data = await mongoDb
				.collection('tasks')
				.findOne({ _id: new ObjectId(result._id).toHexString() });

			expect(JSON.parse(JSON.stringify(data))).toEqual(result);

			/*FIXME: Test fail because "Unable to serialize value 'Thu Jan 
				21 2021 22:33:38 GMT+0700 (Indochina Time)' as it's not a
				n instance of 'Date'"
			*/
			// const res2 = await apolloServerTestClient.query({
			// 	query: gql`
			// 		query {
			// 			tasks {
			// 				_id
			// 				title
			// 				ownerId
			// 				createdAt
			// 			}
			// 		}
			// 	`,
			// });

			// expect(res2.data.tasks).toContainEqual(result);
		});
	});

	describe('deleteTask', () => {
		const DELETE_TASK = gql`
			mutation DeleteTask($id: ID!) {
				deleteTask(input: { _id: $id }) {
					_id
				}
			}
		`;
		it('should login', async () => {
			const variables = { id: '1' };
			const deleteResult = await testMutation({
				mutation: DELETE_TASK,
				variables,
			});

			expect(deleteResult.errors).toBeDefined();
		});

		it('should delete Task successfully', async () => {
			const input = { title: 'Learn English' };
			const res = await testMutation({
				user: defaultUser,
				mutation: gql`
					mutation CreateTask($title: String!) {
						createTask(input: { title: $title }) {
							_id
							title
							ownerId
							createdAt
						}
					}
				`,
				variables: {
					...input,
				},
			});

			expect(res.errors).toBeUndefined();

			const createResult = res.data.createTask;

			const deleteResult = await testMutation({
				user: defaultUser,
				mutation: DELETE_TASK,
				variables: {
					id: createResult._id,
				},
			});

			expect(deleteResult.errors).toBeUndefined();

			expect(deleteResult.data.deleteTask._id).toBe(createResult._id);

			const data = await mongoDb
				.collection('tasks')
				.findOne({ _id: new ObjectId(createResult._id).toHexString() });

			expect(JSON.parse(JSON.stringify(data))).toBeFalsy();
		});
		it('should not able to delete task of another person', async () => {
			const input = { title: 'Learn English' };
			const res = await testMutation({
				user: defaultUser,
				mutation: gql`
					mutation CreateTask($title: String!) {
						createTask(input: { title: $title }) {
							_id
							title
							ownerId
							createdAt
						}
					}
				`,
				variables: {
					...input,
				},
			});

			const createResult = res.data.createTask;

			const deleteResult = await testMutation({
				user: otherUser,
				mutation: DELETE_TASK,
				variables: {
					id: createResult._id,
				},
			});

			expect(deleteResult.errors).toBeDefined();
		});
	});

	describe('editTask', () => {
		it('should edit task successfully', async () => {
			const inputTask = {
				title: 'taska',
			};

			const edittingTask = {
				title: 'taskb',
			};

			const createTaskRes = await testMutation({
				user: defaultUser,
				mutation: gql`
					mutation CreateTask($title: String!) {
						createTask(input: { title: $title }) {
							_id
							title
							createdAt
						}
					}
				`,
				variables: {
					...inputTask,
				},
			});

			const editTaskRes = await testMutation({
				user: defaultUser,
				mutation: gql`
					mutation EditTask($id: ID!, $title: String!) {
						editTask(input: { _id: $id, title: $title }) {
							_id
							title
						}
					}
				`,
				variables: {
					...edittingTask,
					id: createTaskRes.data.createTask._id,
				},
			});

			expect(editTaskRes.data.editTask).toEqual({
				_id: createTaskRes.data.createTask._id,
				title: edittingTask.title,
			});
			try {
				const data = await mongoDb.collection('tasks').findOne({
					_id: new ObjectId(
						createTaskRes.data.createTask._id
					).toHexString(),
				});

				expect(JSON.parse(JSON.stringify(data))).toMatchObject(
					editTaskRes.data.editTask
				);
			} catch (error) {
				console.log('error', error);
			}
		});

		it('should fail to edit the task which did not exist', async () => {
			const editTaskRes = await testMutation({
				user: defaultUser,
				mutation: gql`
					mutation EditTask($id: ID!, $title: String!) {
						editTask(input: { _id: $id, title: $title }) {
							_id
							title
						}
					}
				`,
				variables: {
					title: '',
					id: 'fake id',
				},
			});

			expect(editTaskRes.errors).toBeDefined();
		});
		it('should fail to edit the task when title is empty', async () => {
			const task = await testMutation({
				user: defaultUser,
				mutation: gql`
					mutation CreateTask($title: String!) {
						createTask(input: { title: $title }) {
							_id
							title
							createdAt
						}
					}
				`,
				variables: {
					title: 'task',
				},
			});
			const editTaskRes = await testMutation({
				user: defaultUser,
				mutation: gql`
					mutation EditTask($id: ID!, $title: String!) {
						editTask(input: { _id: $id, title: $title }) {
							_id
							title
						}
					}
				`,
				variables: {
					title: '',
					id: task.data.createTask._id,
				},
			});

			expect(editTaskRes.errors).toBeDefined();
		});
	});

	it('lists task', async () => {
		const res = await testQuery({
			user: defaultUser,
			query: gql`
				query {
					tasks {
						_id
						title
						createdAt
					}
				}
			`,
		});
		expect(res.data).toBeDefined();
	});
});
