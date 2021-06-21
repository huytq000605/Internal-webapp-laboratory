import { UserGraphQLContext } from '@root/domains/users/api/UserApi';
import { GraphqlContext } from '@root/global';
import {
	Arg,
	Authorized,
	Ctx,
	Field,
	ID,
	InputType,
	Mutation,
	ObjectType,
	Query,
	Resolver,
} from 'type-graphql';
import { Service } from 'typedi';
import { RoleService } from '../services/RoleService';

@ObjectType()
export class Role {
	@Field(() => ID)
	_id!: string;

	@Field()
	name!: string;

	@Field(() => [String])
	permissions!: string[];

	@Field()
	createdBy?: UserGraphQLContext;

	@Field()
	createdAt?: Date;

	@Field()
	updatedBy?: UserGraphQLContext;

	@Field()
	updatedAt?: Date;
}

@InputType()
export class MutationRoleInput {
	@Field()
	name!: string;

	@Field(() => [String])
	permissions!: string[];
}
@Service()
@Resolver()
export class RoleResolver {
	constructor(private roleService: RoleService) {}

	@Query(() => Role)
	@Authorized()
	async getRole(@Arg('name') name: string, @Ctx() ctx: GraphqlContext) {
		const result = await this.roleService.getRole(name, ctx.user);
		return result;
	}

	@Query(() => [Role])
	@Authorized()
	async getRoles(@Ctx() ctx: GraphqlContext) {
		const result = await this.roleService.getRoles(ctx.user);
		return result;
	}

	@Mutation(() => Role)
	@Authorized()
	async createRole(
		@Arg('input') input: MutationRoleInput,
		@Ctx() ctx: GraphqlContext
	) {
		const result = await this.roleService.createRole(
			input.name,
			input.permissions,
			ctx.user
		);
		return result;
	}

	@Mutation(() => Role)
	@Authorized()
	async editRole(
		@Arg('input') input: MutationRoleInput,
		@Ctx() ctx: GraphqlContext
	) {
		const result = await this.roleService.editRole(
			input.name,
			input.permissions,
			ctx.user
		);
		return result;
	}

	@Mutation(() => Role)
	@Authorized()
	async deleteRole(@Arg('name') name: string, @Ctx() ctx: GraphqlContext) {
		const result = await this.roleService.deleteRole(name, ctx.user);
		return result;
	}
}
