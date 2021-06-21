import { GraphqlContext } from '@root/global';
import { Service } from 'typedi';
import { UserRepository } from '../repositories/UserRepository';
import {
	SetUserRoleInput,
	UserCreateInput,
	UserEditInput,
} from '../api/UserApi';
import { ObjectId } from 'mongodb';
import { RoleService } from '@root/domains/roles/services/RoleService';
@Service({ transient: false })
export class UserService {
	constructor(
		private readonly userRepository: UserRepository,
		private readonly roleService: RoleService
	) {}

	async createUser(input: UserCreateInput, data: GraphqlContext['google']) {
		if (!data) throw new Error('No User');
		const insertedData = {
			...input,
			_id: new ObjectId().toHexString(),
			email: data.email,
			googleId: data.id,
			createdAt: new ObjectId().getTimestamp(),
			roles: ['guest'],
		};
		const result = await this.userRepository.createUser(insertedData);
		return result;
	}

	async createAdmin(input: UserCreateInput, data: GraphqlContext['google']) {
		if (!data) throw new Error('No User');
		const { name = data.name } = input;
		const insertedData = {
			...input,
			name,
			_id: new ObjectId().toHexString(),
			email: data.email,
			avatar: data.avatar,
			googleId: data.id,
			createdAt: new ObjectId().getTimestamp(),
			roles: ['admin'],
		};
		const result = await this.userRepository.createUser(insertedData);
		return result;
	}

	async getAdmin() {
		return this.userRepository.getAdmin();
	}

	async getUser(id: string) {
		return this.userRepository.getUser(id);
	}

	async getUsers() {
		return this.userRepository.getUsers();
	}

	async deleteUser(id: string) {
		return this.userRepository.deleteUser(id);
	}

	async setUserRole(input: SetUserRoleInput) {
		return this.userRepository.setUserRole(input);
	}

	async getPermissions(user: GraphqlContext['user']) {
		if (!user) throw new Error('No user');
		const result = new Set<string>();
		for (const role of user.roles) {
			const permissions = await this.roleService.getPermissions(role);
			for (const permission of permissions) result.add(permission);
		}
		return Array.from(result);
	}

	async editUser(user: UserEditInput) {
		const result = await this.userRepository.editUser(user);
		return result;
	}
}
