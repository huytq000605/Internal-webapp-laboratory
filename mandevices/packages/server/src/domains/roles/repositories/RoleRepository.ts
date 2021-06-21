import { GraphqlContext } from '@root/global';
import { DATABASE_INSTANCE_KEY } from '@root/config';
import { MongoDataSource } from 'apollo-datasource-mongodb';
import Container, { Service } from 'typedi';
import query from '@root/utils/query';
import { Role } from '../api/RoleApi';
interface RoleCreateDocument {
	_id: string;
	name: string;
	permissions: string[];
	createdAt: Date;
	createdBy: GraphqlContext['user'];
}
interface RoleEditDocument {
	name?: string;
	permissions: string[];
	updatedAt: Date;
	updatedBy: GraphqlContext['user'];
}

@Service()
export class RoleRepository extends MongoDataSource<Role, GraphqlContext> {
	constructor() {
		super(
			(Container.get(DATABASE_INSTANCE_KEY) as any).collection('roles')
		);
	}

	async getRole(name: string) {
		const result = await this.collection.findOne({ name: name });
		return result;
	}

	async getRoles() {
		const result = await query(this.collection, {});
		return result;
	}

	async createRole(doc: RoleCreateDocument) {
		const result = await this.collection.insertOne(doc);
		return result.ops[0];
	}

	async editRole(name: string, document: RoleEditDocument) {
		const result = await this.collection.findOneAndUpdate(
			{ name: name },
			{ $set: document }
		);
		return result.value;
	}

	async deleteRole(name: string) {
		const result = await this.collection.findOneAndDelete({ name: name });
		return result.value;
	}
}
