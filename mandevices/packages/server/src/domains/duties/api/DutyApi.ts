import { GraphqlContext } from '@root/global';
import {
	Authorized,
	Ctx,
	Mutation,
	Query,
	Resolver,
	InputType,
	Field,
	Arg,
	Subscription,
	Root,
	PubSub,
	PubSubEngine,
	ID,
	ObjectType,
} from 'type-graphql';
import { Service } from 'typedi';

@ObjectType()
export class TimeInterval {
	@Field()
	start!: Date;
	@Field()
	end!: Date;
}
@ObjectType({ description: 'The Duty model' })
export class Duty {
	@Field(() => ID)
	_id!: string;

	@Field()
	subscriberName!: string;

	@Field({
		nullable: true,
	})
	subscriberAvatar!: string;

	@Field()
	subscriberId!: string;

	@Field()
	date!: Date;

	@Field(() => [TimeInterval], { nullable: true })
	times!: TimeInterval[];
}

@InputType()
export class TimeIntervalInput {
	@Field()
	start!: Date;
	@Field()
	end!: Date;
}

@InputType()
export class CreateDutyInput {
	@Field(() => [TimeIntervalInput])
	times!: TimeIntervalInput[];
}

@InputType()
export class UnsubcribeDutyInput {
	@Field()
	date!: Date;
}
@Service()
@Resolver()
export class DutyResolver {
	@Query(() => [Duty], { description: 'Get all duties' })
	@Authorized()
	async duties(@Ctx() ctx: GraphqlContext) {
		return ctx.dataSources.duties.getDuties();
	}

	@Query(() => [Duty], { description: 'Get all duties by date' })
	@Authorized()
	async dutiesByDate(@Arg('date') date: Date, @Ctx() ctx: GraphqlContext) {
		return ctx.dataSources.duties.getDutiesByDate(date);
	}

	@Mutation(() => Duty)
	@Authorized()
	async registerDuty(
		@Arg('input') input: CreateDutyInput,
		@Ctx() ctx: GraphqlContext,
		@PubSub() pubSub: PubSubEngine
	) {
		const result = await ctx.dataSources.duties.createDuty(input);

		await pubSub.publish('DUTY-SUBSCRIBE', result);

		return result;
	}

	@Mutation(() => Duty)
	@Authorized()
	async unsubcribeDuty(
		@Arg('input') input: UnsubcribeDutyInput,
		@Ctx() ctx: GraphqlContext,
		@PubSub() pubSub: PubSubEngine
	) {
		const result = await ctx.dataSources.duties.unsubsribeDuty(input);
		await pubSub.publish('DUTY-UNSUBSCRIBE', result);
		return result;
	}

	@Subscription({
		topics: 'DUTY-SUBSCRIBE',
	})
	newSubscriber(@Root() payload: Duty): Duty {
		return payload;
	}

	@Subscription({
		topics: 'DUTY-UNSUBSCRIBE',
	})
	newUnsubscriber(@Root() payload: Duty): Duty {
		return payload;
	}
}
