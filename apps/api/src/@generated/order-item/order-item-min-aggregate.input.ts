import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class OrderItemMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  orderId?: true;

  @Field(() => Boolean, { nullable: true })
  productId?: true;

  @Field(() => Boolean, { nullable: true })
  price?: true;

  @Field(() => Boolean, { nullable: true })
  quantity?: true;

  @Field(() => Boolean, { nullable: true })
  createdAt?: true;

  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
}
