import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedbackWhereInput } from './feedback-where.input';
import { Type } from 'class-transformer';
import { FeedbackOrderByWithAggregationInput } from './feedback-order-by-with-aggregation.input';
import { FeedbackScalarFieldEnum } from './feedback-scalar-field.enum';
import { FeedbackScalarWhereWithAggregatesInput } from './feedback-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { FeedbackCountAggregateInput } from './feedback-count-aggregate.input';
import { FeedbackAvgAggregateInput } from './feedback-avg-aggregate.input';
import { FeedbackSumAggregateInput } from './feedback-sum-aggregate.input';
import { FeedbackMinAggregateInput } from './feedback-min-aggregate.input';
import { FeedbackMaxAggregateInput } from './feedback-max-aggregate.input';

@ArgsType()
export class FeedbackGroupByArgs {
  @Field(() => FeedbackWhereInput, { nullable: true })
  @Type(() => FeedbackWhereInput)
  where?: FeedbackWhereInput;

  @Field(() => [FeedbackOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<FeedbackOrderByWithAggregationInput>;

  @Field(() => [FeedbackScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof FeedbackScalarFieldEnum>;

  @Field(() => FeedbackScalarWhereWithAggregatesInput, { nullable: true })
  having?: FeedbackScalarWhereWithAggregatesInput;

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
