import { MongoDataSource } from 'apollo-datasource-mongodb';
import { Db } from 'mongodb';
import Container, { Service } from 'typedi';
import { DATABASE_INSTANCE_KEY, logger } from '@root/config';
import { GraphqlContext } from '@root/global';
import { SetUserRoleInput, UserEditInput } from '../api/UserApi';
interface User {
	_id: string;
	name: string;
	createdAt: Date;
	email: string;
	googleId: string;
	studentId: string;
	faculty: string;
	specialty: string;
	class: string;
	roles: string[];
}

@Service()
export class UserRepository extends MongoDataSource<User, GraphqlContext> {
	constructor() {
		super(
			(Container.get(DATABASE_INSTANCE_KEY) as Db).collection(
				'users'
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
			) as any
		);
	}

	async getUser(id?: string) {
		if (!id) throw Error('No id to get user');
		const result = await this.collection.findOne({ _id: id });
		return result;
	}

	async getUsers() {
		const result = await this.collection.find({});
		return result.toArray();
	}

	async getAdmin() {
		const result = await this.collection.findOne({
			roles: { $all: ['admin'] },
		});
		return result;
	}

	async createUser(insertedData: User) {
		try {
			const result = await this.collection.insertOne(insertedData);
			return result.ops[0];
		} catch (error) {
			logger.error(error);
			throw new Error(error);
		}
	}

	async setUserRole(input: SetUserRoleInput) {
		try {
			const user = await this.collection.findOne({ _id: input._id });
			if (user && !user.roles.includes(input.role)) {
				const result = await this.collection.findOneAndUpdate(
					{ _id: input._id },
					{ $set: { roles: [input.role, ...user.roles] } }
				);
				return result.value;
			}
			return user;
		} catch (error) {
			logger.error(error);
			throw new Error(error);
		}
	}

	async deleteUser(id: string) {
		try {
			const result = await this.collection.findOneAndDelete({ _id: id });
			return result.value;
		} catch (error) {
			logger.error(error);
			throw new Error(error);
		}
	}

	async editUser(user: UserEditInput) {
		try {
			const { _id, ...data } = user;
			const result = await this.collection.findOneAndUpdate(
				{ _id },
				{
					$set: {
						...data,
					},
				}
			);
			return result.value;
		} catch (error) {
			logger.error(error);
			throw new Error(error);
		}
	}
}
