import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderWhereInput } from './order-where.input';
import { Type } from 'class-transformer';

@InputType()
export class OrderRelationFilter {
  @Field(() => OrderWhereInput, { nullable: true })
  @Type(() => OrderWhereInput)
  is?: OrderWhereInput;

  @Field(() => OrderWhereInput, { nullable: true })
  @Type(() => OrderWhereInput)
  isNot?: OrderWhereInput;
}
