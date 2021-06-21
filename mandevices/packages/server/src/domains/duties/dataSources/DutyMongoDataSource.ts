import { logger } from '@root/config';
import { GraphqlContext } from '@root/global';
import { MongoDataSource } from 'apollo-datasource-mongodb';
import { Db, ObjectId } from 'mongodb';
import {
	CreateDutyInput,
	TimeIntervalInput,
	UnsubcribeDutyInput,
} from '@root/domains/duties/api/DutyApi';
import { identity, pickBy } from 'lodash';

import dayjs from 'dayjs';
import SameOrBefore from 'dayjs/plugin/isSameOrBefore';
import { DATABASE_INSTANCE_KEY } from '@root/config';
import { Service, Container } from 'typedi';

dayjs.extend(SameOrBefore);
@Service()
export class Duties extends MongoDataSource<any, GraphqlContext> {
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
				'duties'
			) as any
		);
	}

	getDuties() {
		const result = this.collection.find();
		return result.toArray();
	}

	getDutiesByDate(date: Date) {
		const result = this.collection.find({
			date: {
				$gte: dayjs(date).startOf('date').toDate(),
				$lt: dayjs(date).endOf('date').toDate(),
			},
		});
		return result.toArray();
	}

	getDuty(id: string) {
		const result = this.collection.findOne({ _id: id });
		return result;
	}

	async createDuty(input: CreateDutyInput, currentDate = new Date()) {
		let inputTimes = input.times;

		try {
			inputTimes.forEach(({ start, end }) => {
				if (!dayjs(start).isSame(end, 'date'))
					throw new Error(
						'Khoảng thời gian phải cùng trong một ngày'
					);

				if (dayjs(start).isSame(dayjs(end))) {
					inputTimes = inputTimes.filter(
						(time) => time.start !== start && time.end !== end
					);
				}

				if (
					Math.abs(dayjs(end).unix() - dayjs(start).unix()) < 3600 &&
					Math.abs(dayjs(end).unix() - dayjs(start).unix()) !== 0
				) {
					throw new Error('Khoảng thời gian phải tối thiểu một giờ');
				}

				if (dayjs(end).isBefore(start)) {
					throw new Error(
						'Thời gian bắt đầu phải nhỏ hơn thời gian kết thúc'
					);
				}

				if (dayjs(start).isSameOrBefore(dayjs(currentDate)))
					throw new Error(
						'Không thể đăng kí trực lab vào những ngày đã qua'
					);
			});

			const times: TimeIntervalInput[] = [];

			inputTimes.sort((a, b) => {
				return dayjs(a.start).unix() - dayjs(b.start).unix();
			});

			times.push(inputTimes[0]);

			for (let i = 1; i < inputTimes.length; i++) {
				const top = times[times.length - 1];

				if (top.end < inputTimes[i].start) {
					times.push(inputTimes[i]);
				} else {
					top.end = inputTimes[i].end;
					times.pop();
					times.push(top);
				}
			}

			const { user } = this.context;
			if (!user) throw new Error('User undefined');
			const id = new ObjectId();

			const data = {
				...input,
				_id: id.toHexString(),
				date: dayjs(times[0].start).startOf('date').toDate(),
				times,
				subscriberAvatar: user.avatar,
				subscriberName: user.name,
				subscriberId: user.id,
			};
			const result = await this.collection.insertOne(
				pickBy(data, identity)
			);

			return result.ops[0];
		} catch (error) {
			logger.error(error);
			if (/E11000/i.test(new Error(error).message))
				throw new Error('Đã đăng kí trực lab vào ngày này rồi');
			throw new Error(error);
		}
	}

	async unsubsribeDuty(input: UnsubcribeDutyInput) {
		try {
			const { date } = input;

			const result = await this.collection.findOneAndDelete({
				date: {
					$gte: dayjs(date).startOf('date').toDate(),
					$lt: dayjs(date).endOf('date').toDate(),
				},
				subscriberId: this.context.user?.id,
			});

			return result.value;
		} catch (error) {
			logger.error(error);
			throw new Error(error);
		}
	}
}
