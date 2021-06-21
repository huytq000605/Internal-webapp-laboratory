import { GraphqlContext } from '@root/global';
import { ObjectId } from 'mongodb';
import { Service } from 'typedi';
import { RoleRepository } from '../repositories/RoleRepository';

@Service()
export class RoleService {
	constructor(private roleRepository: RoleRepository) {}
	async getRole(name: string, user: GraphqlContext['user']) {
		if (!user) throw Error('Unauthorized');
		const result = await this.roleRepository.getRole(name);
		return result;
	}
	async getRoles(user: GraphqlContext['user']) {
		if (!user) throw Error('Unauthorized');
		const result = await this.roleRepository.getRoles();
		return result;
	}
	async createRole(
		name: string,
		permissions: string[],
		user: GraphqlContext['user']
	) {
		if (!user) throw Error('Unauthorized');
		const id = new ObjectId();
		const document = {
			_id: id.toHexString(),
			name,
			permissions,
			createdBy: user,
			createdAt: id.getTimestamp(),
		};
		const result = await this.roleRepository.createRole(document);
		return result;
	}
	async editRole(
		name: string,
		permissions: string[],
		user: GraphqlContext['user']
	) {
		if (!user) throw Error('Unauthorized');
		const document = {
			permissions,
			updatedAt: new Date(),
			updatedBy: user,
		};
		const result = await this.roleRepository.editRole(name, document);
		return result;
	}
	async deleteRole(name: string, user: GraphqlContext['user']) {
		if (!user) throw Error('Unauthorized');
		const result = this.roleRepository.deleteRole(name);
		return result;
	}
	async getPermissions(roleName: string) {
		const role = await this.roleRepository.getRole(roleName);
		if (role) {
			const result = role.permissions;
			return result;
		} else {
			throw Error('No role found');
		}
	}
}
