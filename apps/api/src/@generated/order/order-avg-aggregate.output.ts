import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class OrderAvgAggregate {
  @Field(() => GraphQLDecimal, { nullable: true })
  total?: Decimal;
}
