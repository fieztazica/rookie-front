import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductToPublisherWhereInput } from './product-to-publisher-where.input';
import { Type } from 'class-transformer';
import { ProductToPublisherOrderByWithAggregationInput } from './product-to-publisher-order-by-with-aggregation.input';
import { ProductToPublisherScalarFieldEnum } from './product-to-publisher-scalar-field.enum';
import { ProductToPublisherScalarWhereWithAggregatesInput } from './product-to-publisher-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ProductToPublisherCountAggregateInput } from './product-to-publisher-count-aggregate.input';
import { ProductToPublisherMinAggregateInput } from './product-to-publisher-min-aggregate.input';
import { ProductToPublisherMaxAggregateInput } from './product-to-publisher-max-aggregate.input';

@ArgsType()
export class ProductToPublisherGroupByArgs {
  @Field(() => ProductToPublisherWhereInput, { nullable: true })
  @Type(() => ProductToPublisherWhereInput)
  where?: ProductToPublisherWhereInput;

  @Field(() => [ProductToPublisherOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: Array<ProductToPublisherOrderByWithAggregationInput>;

  @Field(() => [ProductToPublisherScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof ProductToPublisherScalarFieldEnum>;

  @Field(() => ProductToPublisherScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: ProductToPublisherScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => ProductToPublisherCountAggregateInput, { nullable: true })
  _count?: ProductToPublisherCountAggregateInput;

  @Field(() => ProductToPublisherMinAggregateInput, { nullable: true })
  _min?: ProductToPublisherMinAggregateInput;

  @Field(() => ProductToPublisherMaxAggregateInput, { nullable: true })
  _max?: ProductToPublisherMaxAggregateInput;
}
