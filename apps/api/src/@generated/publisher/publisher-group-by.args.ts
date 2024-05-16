import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PublisherWhereInput } from './publisher-where.input';
import { Type } from 'class-transformer';
import { PublisherOrderByWithAggregationInput } from './publisher-order-by-with-aggregation.input';
import { PublisherScalarFieldEnum } from './publisher-scalar-field.enum';
import { PublisherScalarWhereWithAggregatesInput } from './publisher-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PublisherCountAggregateInput } from './publisher-count-aggregate.input';
import { PublisherMinAggregateInput } from './publisher-min-aggregate.input';
import { PublisherMaxAggregateInput } from './publisher-max-aggregate.input';

@ArgsType()
export class PublisherGroupByArgs {
  @Field(() => PublisherWhereInput, { nullable: true })
  @Type(() => PublisherWhereInput)
  where?: PublisherWhereInput;

  @Field(() => [PublisherOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<PublisherOrderByWithAggregationInput>;

  @Field(() => [PublisherScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof PublisherScalarFieldEnum>;

  @Field(() => PublisherScalarWhereWithAggregatesInput, { nullable: true })
  having?: PublisherScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => PublisherCountAggregateInput, { nullable: true })
  _count?: PublisherCountAggregateInput;

  @Field(() => PublisherMinAggregateInput, { nullable: true })
  _min?: PublisherMinAggregateInput;

  @Field(() => PublisherMaxAggregateInput, { nullable: true })
  _max?: PublisherMaxAggregateInput;
}
