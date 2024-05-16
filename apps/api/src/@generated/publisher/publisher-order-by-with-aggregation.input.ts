import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { PublisherCountOrderByAggregateInput } from './publisher-count-order-by-aggregate.input';
import { PublisherMaxOrderByAggregateInput } from './publisher-max-order-by-aggregate.input';
import { PublisherMinOrderByAggregateInput } from './publisher-min-order-by-aggregate.input';

@InputType()
export class PublisherOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrderInput, { nullable: true })
  displayName?: SortOrderInput;

  @Field(() => SortOrder, { nullable: true })
  email?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  phoneNumber?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  website?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  deleted?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;

  @Field(() => PublisherCountOrderByAggregateInput, { nullable: true })
  _count?: PublisherCountOrderByAggregateInput;

  @Field(() => PublisherMaxOrderByAggregateInput, { nullable: true })
  _max?: PublisherMaxOrderByAggregateInput;

  @Field(() => PublisherMinOrderByAggregateInput, { nullable: true })
  _min?: PublisherMinOrderByAggregateInput;
}
