import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FeedbackCountAggregate } from './feedback-count-aggregate.output';
import { FeedbackAvgAggregate } from './feedback-avg-aggregate.output';
import { FeedbackSumAggregate } from './feedback-sum-aggregate.output';
import { FeedbackMinAggregate } from './feedback-min-aggregate.output';
import { FeedbackMaxAggregate } from './feedback-max-aggregate.output';

@ObjectType()
export class FeedbackGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  customerId!: string;

  @Field(() => String, { nullable: false })
  productId!: string;

  @Field(() => String, { nullable: false })
  message!: string;

  @Field(() => Int, { nullable: false })
  rating!: number;

  @Field(() => String, { nullable: true })
  status?: string;

  @Field(() => Boolean, { nullable: false })
  deleted!: boolean;

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;

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
