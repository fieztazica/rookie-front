import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProductToPublisherCountAggregate } from './product-to-publisher-count-aggregate.output';
import { ProductToPublisherMinAggregate } from './product-to-publisher-min-aggregate.output';
import { ProductToPublisherMaxAggregate } from './product-to-publisher-max-aggregate.output';

@ObjectType()
export class ProductToPublisherGroupBy {
  @Field(() => String, { nullable: false })
  productId!: string;

  @Field(() => String, { nullable: false })
  publisherId!: string;

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;

  @Field(() => ProductToPublisherCountAggregate, { nullable: true })
  _count?: ProductToPublisherCountAggregate;

  @Field(() => ProductToPublisherMinAggregate, { nullable: true })
  _min?: ProductToPublisherMinAggregate;

  @Field(() => ProductToPublisherMaxAggregate, { nullable: true })
  _max?: ProductToPublisherMaxAggregate;
}
