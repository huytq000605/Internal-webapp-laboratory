import { Ctx, InputType, Mutation, Query, Resolver, Arg } from 'type-graphql';
import { Field, ID, ObjectType } from 'type-graphql';

import { GraphqlContext } from '@root/global';
import { Service } from 'typedi';
import { UserService } from '../services/UserService';
import { AuthenticationError } from 'apollo-server-express';

@ObjectType()
class User {
	@Field(() => ID)
	_id!: string;

	@Field({ nullable: true })
	name!: string;

	@Field({ nullable: true })
	createdAt!: Date;

	@Field({ nullable: true })
	studentId!: string;

	@Field({ nullable: true })
	faculty!: string;

	@Field({ nullable: true })
	specialty!: string;

	@Field({ nullable: true })
	class!: string;

	@Field(() => [String])
	roles!: string[];

	@Field()
	googleId!: string;

	@Field()
	email!: string;

	@Field({ nullable: true })
	avatar?: string;
}

@ObjectType()
export class UserGraphQLContext {
	@Field(() => ID)
	id!: string;

	@Field()
	avatar?: string;

	@Field()
	email!: string;

	@Field()
	name!: string;
}
@InputType()
export class UserCreateInput {
	@Field({ nullable: true })
	name!: string;

	@Field({ nullable: true })
	studentId!: string;

	@Field({ nullable: true })
	faculty!: string;

	@Field({ nullable: true })
	specialty!: string;

	@Field({ nullable: true })
	class!: string;
}
@InputType()
export class UserEditInput {
	@Field(() => ID)
	_id!: string;

	@Field({ nullable: true })
	name?: string;

	@Field({ nullable: true })
	studentId?: string;

	@Field({ nullable: true })
	faculty?: string;

	@Field({ nullable: true })
	specialty?: string;

	@Field({ nullable: true })
	class?: string;

	@Field(() => [String], { nullable: true })
	roles?: string[];
}

@InputType()
export class SetUserRoleInput {
	@Field()
	_id!: string;

	@Field()
	role!: string;
}

@Service()
@Resolver()
export class UserApi {
	constructor(private readonly userService: UserService) {}

	@Mutation(() => User)
	async createUser(
		@Arg('input') input: UserCreateInput,
		@Ctx() ctx: GraphqlContext
	) {
		if (!ctx.google) throw new Error('Chưa đăng nhập');
		return await this.userService.createUser(input, ctx.google);
	}
	@Mutation(() => User)
	async createAdmin(
		@Arg('input') input: UserCreateInput,
		@Ctx() ctx: GraphqlContext
	) {
		if (!ctx.google) throw new AuthenticationError('Chưa đăng nhập');

		return await this.userService.createAdmin(input, ctx.google);
	}
	@Query(() => User)
	async getUser(@Arg('input') id: string) {
		return await this.userService.getUser(id);
	}

	@Query(() => [User])
	async getUsers() {
		return await this.userService.getUsers();
	}

	@Query(() => User)
	async getAdmin() {
		return await this.userService.getAdmin();
	}

	@Mutation(() => User)
	async deleteUser(@Arg('input') input: string) {
		return await this.userService.deleteUser(input);
	}

	@Mutation(() => User)
	async setUserRole(@Arg('input') input: SetUserRoleInput) {
		return await this.userService.setUserRole(input);
	}

	@Mutation(() => User)
	async editUser(@Arg('input') input: UserEditInput) {
		const result = this.userService.editUser(input);
		return result;
	}
}
