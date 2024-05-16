import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedbackWhereInput } from './feedback-where.input';
import { Type } from 'class-transformer';
import { FeedbackOrderByWithRelationInput } from './feedback-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { FeedbackWhereUniqueInput } from './feedback-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FeedbackCountAggregateInput } from './feedback-count-aggregate.input';
import { FeedbackAvgAggregateInput } from './feedback-avg-aggregate.input';
import { FeedbackSumAggregateInput } from './feedback-sum-aggregate.input';
import { FeedbackMinAggregateInput } from './feedback-min-aggregate.input';
import { FeedbackMaxAggregateInput } from './feedback-max-aggregate.input';

@ArgsType()
export class FeedbackAggregateArgs {
  @Field(() => FeedbackWhereInput, { nullable: true })
  @Type(() => FeedbackWhereInput)
  where?: FeedbackWhereInput;

  @Field(() => [FeedbackOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<FeedbackOrderByWithRelationInput>;

  @Field(() => FeedbackWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<FeedbackWhereUniqueInput, 'id'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => FeedbackCountAggregateInput, { nullable: true })
  _count?: FeedbackCountAggregateInput;

  @Field(() => FeedbackAvgAggregateInput, { nullable: true })
  _avg?: FeedbackAvgAggregateInput;

  @Field(() => FeedbackSumAggregateInput, { nullable: true })
  _sum?: FeedbackSumAggregateInput;

  @Field(() => FeedbackMinAggregateInput, { nullable: true })
  _min?: FeedbackMinAggregateInput;

  @Field(() => FeedbackMaxAggregateInput, { nullable: true })
  _max?: FeedbackMaxAggregateInput;
}
