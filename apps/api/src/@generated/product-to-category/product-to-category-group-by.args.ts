import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductToCategoryWhereInput } from './product-to-category-where.input';
import { Type } from 'class-transformer';
import { ProductToCategoryOrderByWithAggregationInput } from './product-to-category-order-by-with-aggregation.input';
import { ProductToCategoryScalarFieldEnum } from './product-to-category-scalar-field.enum';
import { ProductToCategoryScalarWhereWithAggregatesInput } from './product-to-category-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ProductToCategoryCountAggregateInput } from './product-to-category-count-aggregate.input';
import { ProductToCategoryMinAggregateInput } from './product-to-category-min-aggregate.input';
import { ProductToCategoryMaxAggregateInput } from './product-to-category-max-aggregate.input';

@ArgsType()
export class ProductToCategoryGroupByArgs {
  @Field(() => ProductToCategoryWhereInput, { nullable: true })
  @Type(() => ProductToCategoryWhereInput)
  where?: ProductToCategoryWhereInput;

  @Field(() => [ProductToCategoryOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: Array<ProductToCategoryOrderByWithAggregationInput>;

  @Field(() => [ProductToCategoryScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof ProductToCategoryScalarFieldEnum>;

  @Field(() => ProductToCategoryScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: ProductToCategoryScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => ProductToCategoryCountAggregateInput, { nullable: true })
  _count?: ProductToCategoryCountAggregateInput;

  @Field(() => ProductToCategoryMinAggregateInput, { nullable: true })
  _min?: ProductToCategoryMinAggregateInput;

  @Field(() => ProductToCategoryMaxAggregateInput, { nullable: true })
  _max?: ProductToCategoryMaxAggregateInput;
}
