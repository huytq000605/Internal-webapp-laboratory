/**
 * @jest-environment <rootDir>/src/config/mongo-test-environment
 */
import { testMutation, testQuery } from '@root/utils/tests';
import { gql } from 'apollo-server-express';
import { Db } from 'mongodb';
import { ObjectId } from 'mongodb';
import '@root/dependencyInjections';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mongoDb: Db = (global as any).db;
const defaultUser = {
	id: '1',
	email: 'test@gmail.com',
	name: 'canh',
	roles: ['guest'],
};
// const otherUser = { id: '2', email: 'test@gmail.com', name: 'canh' };

describe('Device API', () => {
	describe('devices', () => {
		const GET_TASKS = gql`
			query getDevices {
				devices {
					name
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
			expect(result.data.devices).toEqual([]);
		});
	});

	describe('device', () => {
		const GET_DEVICE = gql`
			query getDevice($id: String!) {
				device(input: $id) {
					name
				}
			}
		`;

		const CREATE_DEVICE = gql`
			mutation createDevice($name: String!, $category: String!) {
				createDevice(input: { name: $name, category: $category }) {
					name
					_id
				}
			}
		`;

		it('should login', async () => {
			const result = await testQuery({
				query: GET_DEVICE,
				variables: { id: 'abc' },
			});
			expect(result.errors).toBeDefined();
		});

		it('should return device with name', async () => {
			const mutationDevice = await testMutation({
				mutation: CREATE_DEVICE,
				user: defaultUser,
				variables: {
					name: 'test',
					category: 'test',
				},
			});
			const result = await testQuery({
				query: GET_DEVICE,
				user: defaultUser,
				variables: {
					id: mutationDevice.data.createDevice._id,
				},
			});
			expect(result.errors).toBeUndefined();
			expect(result.data).toBeDefined();
			expect(result.data.device).toEqual({ name: 'test' });
		});
	});

	describe('createDevice', () => {
		const CREATE_DEVICE = gql`
			mutation createDevice($name: String!, $category: String!) {
				createDevice(input: { name: $name, category: $category }) {
					name
					_id
				}
			}
		`;
		const variables = { name: 'Test', category: 'Test' };

		it('should login', async () => {
			const result = await testMutation({
				mutation: CREATE_DEVICE,
				variables,
			});

			expect(result.errors).toBeDefined();
		});

		it('should create device', async () => {
			const res = await testMutation({
				user: defaultUser,
				mutation: CREATE_DEVICE,
				variables,
			});

			expect(res.errors).toBeUndefined();

			const result = res.data.createDevice;

			expect(result).toEqual({
				name: variables.name,
				_id: expect.any(String),
			});

			const data = await mongoDb
				.collection('devices')
				.findOne({ _id: new ObjectId(result._id).toHexString() });

			const { _id, name } = data;
			const testData = {
				_id,
				name,
			};

			expect(JSON.parse(JSON.stringify(testData))).toEqual(result);
		});
	});

	describe('editDevice', () => {
		const EDIT_DEVICE = gql`
			mutation editDevice($id: ID!, $name: String!, $category: String!) {
				editDevice(
					input: { _id: $id, name: $name, category: $category }
				) {
					name
				}
			}
		`;

		const CREATE_DEVICE = gql`
			mutation createDevice($name: String!, $category: String!) {
				createDevice(input: { name: $name, category: $category }) {
					name
					_id
				}
			}
		`;

		const GET_DEVICE = gql`
			query getDevice($id: String!) {
				device(input: $id) {
					name
				}
			}
		`;

		const variables = { name: 'Test', category: 'Test' };

		it('should login', async () => {
			const result = await testMutation({
				mutation: EDIT_DEVICE,
				variables: variables,
			});
			expect(result.errors).toBeDefined();
		});

		it('should edit device', async () => {
			const createData = await testMutation({
				mutation: CREATE_DEVICE,
				variables: variables,
				user: defaultUser,
			});

			await testMutation({
				mutation: EDIT_DEVICE,
				variables: {
					...variables,
					name: 'Edited',
					id: createData.data.createDevice._id,
				},
				user: defaultUser,
			});

			const device = await testQuery({
				query: GET_DEVICE,
				variables: {
					id: createData.data.createDevice._id,
				},
				user: defaultUser,
			});

			expect(device.data.device).toEqual({
				name: 'Edited',
			});
		});
	});

	describe('deleteDevice', () => {
		const DELETE_DEVICE = gql`
			mutation deleteDevice($id: String!) {
				deleteDevice(input: $id) {
					_id
					name
				}
			}
		`;

		const CREATE_DEVICE = gql`
			mutation createDevice($name: String!, $category: String!) {
				createDevice(input: { name: $name, category: $category }) {
					_id
					name
				}
			}
		`;

		it('should login', async () => {
			const result = await testMutation({
				mutation: DELETE_DEVICE,
			});
			expect(result.errors).toBeDefined();
		});

		it('should delete device', async () => {
			const createData = await testMutation({
				mutation: CREATE_DEVICE,
				variables: {
					name: 'test',
					category: 'test',
				},
				user: defaultUser,
			});

			const deleteData = await testMutation({
				mutation: DELETE_DEVICE,
				variables: {
					id: createData.data.createDevice._id,
				},
				user: defaultUser,
			});

			const data = await mongoDb.collection('devices').findOne({
				_id: new ObjectId(
					createData.data.createDevice._id
				).toHexString(),
			});

			expect(data).toEqual(null);
			expect(deleteData.data.deleteDevice).toEqual({
				_id: createData.data.createDevice._id,
				name: 'test',
			});
		});

		describe('createDevices', () => {
			const CREATE_DEVICES = gql`
				mutation createDevices($devices: [DeviceCreateInput!]!) {
					createDevices(input: $devices) {
						_id
						name
						category
					}
				}
			`;
			const variables = {
				devices: [
					{ name: 'test1', category: 'test2' },
					{ name: 'test1', category: 'test2' },
				],
			};
			it('should login', async () => {
				const result = await testMutation({
					mutation: CREATE_DEVICES,
					variables: variables,
				});
				expect(result.errors).toBeDefined();
			});
			it('should create many devices', async () => {
				const response = await testMutation({
					mutation: CREATE_DEVICES,
					variables: variables,
					user: defaultUser,
				});
				const result = response.data.createDevices;
				expect(result).toEqual([
					{
						_id: expect.any(String),
						name: 'test1',
						category: 'test2',
					},
					{
						_id: expect.any(String),
						name: 'test1',
						category: 'test2',
					},
				]);
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				const docs: any[] = [];
				const cusor = await mongoDb
					.collection('devices')
					.find({ name: 'test1' });
				await cusor.forEach((doc) => docs.push(doc));
				expect(docs).toEqual([
					{
						_id: expect.any(String),
						name: 'test1',
						category: 'test2',
						createdAt: expect.any(Object),
						createdBy: expect.any(Object),
					},
					{
						_id: expect.any(String),
						name: 'test1',
						category: 'test2',
						createdAt: expect.any(Object),
						createdBy: expect.any(Object),
					},
				]);
			});
		});
	});
});
