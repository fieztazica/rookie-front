import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderItemWhereInput } from './order-item-where.input';
import { Type } from 'class-transformer';
import { OrderItemOrderByWithRelationInput } from './order-item-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { OrderItemWhereUniqueInput } from './order-item-where-unique.input';
import { Int } from '@nestjs/graphql';
import { OrderItemScalarFieldEnum } from './order-item-scalar-field.enum';

@ArgsType()
export class FindFirstOrderItemArgs {
  @Field(() => OrderItemWhereInput, { nullable: true })
  @Type(() => OrderItemWhereInput)
  where?: OrderItemWhereInput;

  @Field(() => [OrderItemOrderByWithRelationInput], { nullable: true })
  @Type(() => OrderItemOrderByWithRelationInput)
  orderBy?: Array<OrderItemOrderByWithRelationInput>;

  @Field(() => OrderItemWhereUniqueInput, { nullable: true })
  @Type(() => OrderItemWhereUniqueInput)
  cursor?: Prisma.AtLeast<OrderItemWhereUniqueInput, 'orderId_productId'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [OrderItemScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof OrderItemScalarFieldEnum>;
}
