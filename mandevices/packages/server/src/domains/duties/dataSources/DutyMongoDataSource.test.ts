/**
 * @jest-environment <rootDir>/src/config/mongo-test-environment
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
import dayjs from 'dayjs';
import { Collection } from 'mongodb';
import { nanoid } from 'nanoid';
import { Duties } from './DutyMongoDataSource';
import Duration from 'dayjs/plugin/duration';

dayjs.extend(Duration);

jest.mock('@root/config');

const dbCollection: Collection = (global as any).collection;
const dataSource: Duties = new Duties();

describe('Duties data source', () => {
	beforeAll(async () => {
		try {
			// dataSource = new Duties((global as any).collection);
		} catch (error) {
			console.error(error);
		}
	});

	it.todo('should throw error when time intervals is empty');

	it('should remove time interval length is zero', async () => {
		const registerId = nanoid();
		dataSource.init({
			id: registerId,
			name: 'test-user',
			email: 'test@gmail.com',
			roles: ['guest'],
		});
		const result = await dataSource.createDuty(
			{
				times: [
					{
						start: new Date(2020, 2, 0, 8, 30),
						end: new Date(2020, 2, 0, 9, 30),
					},
					{
						start: new Date(2020, 3, 0, 8, 30),
						end: new Date(2020, 3, 0, 8, 30),
					},
				],
			},
			new Date(2019)
		);

		const data = await dbCollection.findOne({ subscriberId: registerId });

		expect(result).toEqual(data);
		expect(result.times).toEqual([
			{
				start: new Date(2020, 2, 0, 8, 30),
				end: new Date(2020, 2, 0, 9, 30),
			},
		]);
	});

	it('should create duty', async () => {
		const registerId = nanoid();
		dataSource.init({
			id: registerId,
			name: 'test-user',
			email: 'test@gmail.com',
			roles: ['guest'],
		});
		const result = await dataSource.createDuty(
			{
				times: [
					{
						start: new Date(2020, 2, 0, 8, 30),
						end: new Date(2020, 2, 0, 9, 30),
					},
				],
			},
			new Date(2019)
		);

		const data = await dbCollection.findOne({ subscriberId: registerId });

		expect(result).toEqual(data);
		expect(result.date).toEqual(new Date(2020, 2, 0, 0, 0, 0, 0));
	});
	it('should not create duty in the past', async (done) => {
		dataSource.init({
			id: nanoid(),
			name: 'test-user',
			email: 'test@gmail.com',
			roles: ['guest'],
		});

		const current = new Date(2020, 1, 1, 1, 0);
		try {
			await dataSource.createDuty(
				{
					times: [
						{
							start: dayjs(current).toDate(),
							end: dayjs(current)
								.add(dayjs.duration(2, 'hour'))
								.toDate(),
						},
					],
				},
				new Date(2021, 1, 1)
			);
		} catch (error) {
			expect(error.message).toEqual(
				expect.stringMatching(
					/Không thể đăng kí trực lab vào những ngày đã qua/i
				)
			);
			done();
		}
	});

	it('should create duty on different date', async () => {
		const registerId = nanoid();
		dataSource.init({
			id: registerId,
			name: 'test-user',
			email: 'test@gmail.com',
			roles: ['guest'],
		});
		const result = await dataSource.createDuty(
			{
				times: [
					{
						start: new Date(2020, 2, 0, 8, 30),
						end: new Date(2020, 2, 0, 9, 30),
					},
				],
			},
			new Date(2019)
		);

		const data = await dbCollection.findOne({
			subscriberId: registerId,
			date: new Date(2020, 2, 0, 0, 0, 0, 0),
		});

		expect(result).toEqual(data);
		expect(result.date).toEqual(new Date(2020, 2, 0, 0, 0, 0, 0));

		const result2 = await dataSource.createDuty(
			{
				times: [
					{
						start: new Date(2020, 2, 1, 8, 30),
						end: new Date(2020, 2, 1, 9, 30),
					},
				],
			},
			new Date(2019)
		);

		const data2 = await dbCollection.findOne({
			subscriberId: registerId,
			date: new Date(2020, 2, 1, 0, 0, 0, 0),
		});

		expect(result2).toEqual(data2);
		expect(result2.date).toEqual(new Date(2020, 2, 1, 0, 0, 0, 0));
	});
	it('should throw error when duplicate duty creating', async (done) => {
		dataSource.init({
			id: nanoid(),
			name: 'test-user',
			email: 'test@gmail.com',
			roles: ['guest'],
		});

		await dbCollection.deleteMany({});

		dbCollection.createIndex(
			{ subscriberId: 1, date: 1 },
			{ unique: true, name: 'unique_duty_register' }
		);
		try {
			await dataSource.createDuty(
				{
					times: [
						{
							start: new Date(2020, 2, 0, 8, 30),
							end: new Date(2020, 2, 0, 9, 30),
						},
					],
				},
				new Date(2020, 1, 0, 0, 30)
			);

			await dataSource.createDuty(
				{
					times: [
						{
							start: new Date(2020, 2, 0, 8, 30),
							end: new Date(2020, 2, 0, 9, 30),
						},
					],
				},
				new Date(2020, 1, 0, 0, 30)
			);
		} catch (error) {
			expect(error.message).toEqual(
				expect.stringMatching(/Đã đăng kí trực lab vào ngày này rồi/i)
			);
			done();
		}
	});

	it('should create duty with no overlaping interval', async () => {
		const subscriberId = nanoid();
		dataSource.init({
			id: subscriberId,
			name: 'test-user',
			email: 'test@gmail.com',
			roles: ['guest'],
		});
		const result = await dataSource.createDuty(
			{
				times: [
					{
						start: new Date(2020, 2, 1, 8, 30, 0, 0),
						end: new Date(2020, 2, 1, 10, 30, 0, 0),
					},
					{
						start: new Date(2020, 2, 1, 9, 35, 0, 0),
						end: new Date(2020, 2, 1, 10, 40, 0, 0),
					},
					{
						start: new Date(2020, 2, 1, 8, 25, 0, 0),
						end: new Date(2020, 2, 1, 9, 37, 0, 0),
					},
					{
						start: new Date(2020, 2, 1, 17, 30, 0, 0),
						end: new Date(2020, 2, 1, 18, 30, 0, 0),
					},
					{
						start: new Date(2020, 2, 1, 18, 23, 0, 0),
						end: new Date(2020, 2, 1, 19, 30, 0, 0),
					},
				],
			},
			new Date(2019)
		);

		const mergedTime = [
			{
				start: new Date(2020, 2, 1, 8, 25, 0, 0),
				end: new Date(2020, 2, 1, 10, 40, 0, 0),
			},
			{
				start: new Date(2020, 2, 1, 17, 30, 0, 0),
				end: new Date(2020, 2, 1, 19, 30, 0, 0),
			},
		];

		const data = await dbCollection.findOne({ subscriberId });

		expect(result.times).toEqual(mergedTime);

		expect(result).toEqual(data);
	});

	it('should throw error when user not login create duty', async (done) => {
		dataSource.init(undefined);

		try {
			await dataSource.createDuty({
				times: [
					{
						start: new Date(2020, 2, 0, 8, 30),
						end: new Date(2020, 2, 0, 9, 30),
					},
				],
			});
		} catch (error) {
			expect(error.message).toBeDefined();
		} finally {
			done();
		}
	});
	it('should throw error when data pass to create duty is invalid', async (done) => {
		dataSource.init({
			id: '1',
			name: 'test-user',
			email: 'test@gmail.com',
			roles: ['guest'],
		});

		try {
			await dataSource.createDuty({
				times: [
					{
						start: new Date(2020, 1, 1, 23, 59),
						end: new Date(2020, 1, 2, 0, 0),
					},
				],
			});
		} catch (error) {
			expect(error.message).toEqual(
				expect.stringMatching(
					/Khoảng thời gian phải cùng trong một ngày/i
				)
			);
		}

		try {
			await dataSource.createDuty({
				times: [
					{
						start: new Date(2020, 1, 2, 0, 59, 59, 999),
						end: new Date(2020, 1, 2, 0, 0),
					},
				],
			});
		} catch (error) {
			expect(error.message).toEqual(
				expect.stringMatching(
					/Khoảng thời gian phải tối thiểu một giờ/i
				)
			);
		}

		try {
			await dataSource.createDuty({
				times: [
					{
						end: new Date(2020, 1, 2, 0, 0, 59, 999),
						start: new Date(2020, 1, 2, 2, 0),
					},
				],
			});
		} catch (error) {
			expect(error.message).toEqual(
				expect.stringMatching(
					/Thời gian bắt đầu phải nhỏ hơn thời gian kết thúc/i
				)
			);
			done();
		}
	});
});
