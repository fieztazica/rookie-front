import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class OrderItemCountAggregate {
  @Field(() => Int, { nullable: false })
  orderId!: number;

  @Field(() => Int, { nullable: false })
  productId!: number;

  @Field(() => Int, { nullable: false })
  price!: number;

  @Field(() => Int, { nullable: false })
  quantity!: number;

  @Field(() => Int, { nullable: false })
  createdAt!: number;

  @Field(() => Int, { nullable: false })
  updatedAt!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
