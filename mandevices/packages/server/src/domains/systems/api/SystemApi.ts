import {
	Field,
	FieldResolver,
	ObjectType,
	Query,
	Resolver,
	ResolverInterface,
} from 'type-graphql';
import { Service } from 'typedi';

import { SystemService } from '../services/SystemService';
import config from '../../authorization/config/config.json';

@ObjectType()
export class Permissions {
	@Field()
	api!: string;

	@Field()
	group!: string;

	@Field(() => [String])
	permissions!: string[];
}

@ObjectType()
class System {}

@Service()
@Resolver(() => System)
export class SystemResolver implements ResolverInterface<System> {
	constructor(private readonly systemService: SystemService) {}

	@FieldResolver(() => Boolean)
	hasOwnerAccount() {
		return this.systemService.hasAdmin();
	}

	@Query(() => System)
	system() {
		return {};
	}

	@Query(() => [Permissions])
	getPermissionsConfig() {
		return config;
	}
}
