import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class OrderItemMaxAggregate {
  @Field(() => String, { nullable: true })
  orderId?: string;

  @Field(() => String, { nullable: true })
  productId?: string;

  @Field(() => GraphQLDecimal, { nullable: true })
  price?: Decimal;

  @Field(() => Int, { nullable: true })
  quantity?: number;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}
