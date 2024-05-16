import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProductToCategoryCountAggregate } from './product-to-category-count-aggregate.output';
import { ProductToCategoryMinAggregate } from './product-to-category-min-aggregate.output';
import { ProductToCategoryMaxAggregate } from './product-to-category-max-aggregate.output';

@ObjectType()
export class ProductToCategoryGroupBy {
  @Field(() => String, { nullable: false })
  productId!: string;

  @Field(() => String, { nullable: false })
  categoryId!: string;

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;

  @Field(() => ProductToCategoryCountAggregate, { nullable: true })
  _count?: ProductToCategoryCountAggregate;

  @Field(() => ProductToCategoryMinAggregate, { nullable: true })
  _min?: ProductToCategoryMinAggregate;

  @Field(() => ProductToCategoryMaxAggregate, { nullable: true })
  _max?: ProductToCategoryMaxAggregate;
}
