import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProductToPublisherCountOrderByAggregateInput } from './product-to-publisher-count-order-by-aggregate.input';
import { ProductToPublisherMaxOrderByAggregateInput } from './product-to-publisher-max-order-by-aggregate.input';
import { ProductToPublisherMinOrderByAggregateInput } from './product-to-publisher-min-order-by-aggregate.input';

@InputType()
export class ProductToPublisherOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  productId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  publisherId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;

  @Field(() => ProductToPublisherCountOrderByAggregateInput, { nullable: true })
  _count?: ProductToPublisherCountOrderByAggregateInput;

  @Field(() => ProductToPublisherMaxOrderByAggregateInput, { nullable: true })
  _max?: ProductToPublisherMaxOrderByAggregateInput;

  @Field(() => ProductToPublisherMinOrderByAggregateInput, { nullable: true })
  _min?: ProductToPublisherMinOrderByAggregateInput;
}
