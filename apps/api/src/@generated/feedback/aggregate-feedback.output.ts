import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FeedbackCountAggregate } from './feedback-count-aggregate.output';
import { FeedbackAvgAggregate } from './feedback-avg-aggregate.output';
import { FeedbackSumAggregate } from './feedback-sum-aggregate.output';
import { FeedbackMinAggregate } from './feedback-min-aggregate.output';
import { FeedbackMaxAggregate } from './feedback-max-aggregate.output';

@ObjectType()
export class AggregateFeedback {
  @Field(() => FeedbackCountAggregate, { nullable: true })
  _count?: FeedbackCountAggregate;

  @Field(() => FeedbackAvgAggregate, { nullable: true })
  _avg?: FeedbackAvgAggregate;

  @Field(() => FeedbackSumAggregate, { nullable: true })
  _sum?: FeedbackSumAggregate;

  @Field(() => FeedbackMinAggregate, { nullable: true })
  _min?: FeedbackMinAggregate;

  @Field(() => FeedbackMaxAggregate, { nullable: true })
  _max?: FeedbackMaxAggregate;
}
