import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ProductToPublisherMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  productId?: true;

  @Field(() => Boolean, { nullable: true })
  publisherId?: true;

  @Field(() => Boolean, { nullable: true })
  createdAt?: true;

  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
}
