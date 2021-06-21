import {
	Arg,
	Authorized,
	Ctx,
	Field,
	ID,
	InputType,
	Mutation,
	Query,
	Resolver,
	ObjectType,
} from 'type-graphql';

import { GraphqlContext } from 'src/global';
import { logger } from '@root/config';
import { ApolloError } from 'apollo-server-express';
import { Service } from 'typedi';
import { TaskService } from '../services/TaskService';

@ObjectType({ description: 'The Task model' })
export class Task {
	@Field(() => ID)
	_id!: string;

	@Field()
	title!: string;

	@Field()
	ownerId!: string;

	@Field(() => Date)
	createdAt!: Date;
}

@InputType()
export class TaskCreateInput implements Partial<Task> {
	@Field()
	title!: string;
}
@InputType()
export class TaskEditInput implements Partial<Task> {
	@Field(() => ID, { description: 'The id of task which will be editted' })
	_id!: string;
	@Field()
	title!: string;
}
@InputType()
export class TaskWhereUniqueInput implements Partial<Task> {
	@Field(() => ID, { description: 'The id of task' })
	_id!: string;
}

@Service()
@Resolver()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class TaskResolver {
	constructor(private readonly taskService: TaskService) {}

	@Query(() => [Task])
	@Authorized()
	async tasks(@Ctx() ctx: GraphqlContext) {
		const result = await this.taskService.getTasksByUser(ctx.user);

		return result;
	}
	@Mutation(() => Task)
	@Authorized()
	async createTask(
		@Arg('input') input: TaskCreateInput,
		@Ctx() ctx: GraphqlContext
	) {
		try {
			const result = await this.taskService.createTask(input, ctx.user);
			return result;
		} catch (error) {
			logger.error(error);
			throw new ApolloError(error);
		}
	}

	@Mutation(() => Task)
	async editTask(@Arg('input') input: TaskEditInput) {
		return this.taskService.editTask(input);
	}

	@Mutation(() => Task)
	@Authorized()
	async deleteTask(
		@Arg('input') input: TaskWhereUniqueInput,
		@Ctx() ctx: GraphqlContext
	) {
		return this.taskService.deleteTask(input._id, ctx.user);
	}
}
