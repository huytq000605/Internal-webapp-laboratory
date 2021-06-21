import { Service } from 'typedi';

import { UserRepository } from '@root/domains/users/repositories/UserRepository';

@Service()
export class SystemService {
	constructor(private readonly userRepository: UserRepository) {}

	async hasAdmin(): Promise<boolean> {
		const ownerUsers = await this.userRepository.getAdmin();

		const hasOwnerUser = ownerUsers ? true : false;

		return hasOwnerUser;
	}
}
