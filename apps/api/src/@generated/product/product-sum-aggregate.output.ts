import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class ProductSumAggregate {
  @Field(() => GraphQLDecimal, { nullable: true })
  price?: Decimal;

  @Field(() => GraphQLDecimal, { nullable: true })
  salePrice?: Decimal;
}
