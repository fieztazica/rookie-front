import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderItemOrderIdProductIdCompoundUniqueInput } from './order-item-order-id-product-id-compound-unique.input';
import { Type } from 'class-transformer';
import { OrderItemWhereInput } from './order-item-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { OrderRelationFilter } from '../order/order-relation-filter.input';
import { ProductRelationFilter } from '../product/product-relation-filter.input';

@InputType()
export class OrderItemWhereUniqueInput {
  @Field(() => OrderItemOrderIdProductIdCompoundUniqueInput, { nullable: true })
  @Type(() => OrderItemOrderIdProductIdCompoundUniqueInput)
  orderId_productId?: OrderItemOrderIdProductIdCompoundUniqueInput;

  @Field(() => [OrderItemWhereInput], { nullable: true })
  @Type(() => OrderItemWhereInput)
  AND?: Array<OrderItemWhereInput>;

  @Field(() => [OrderItemWhereInput], { nullable: true })
  @Type(() => OrderItemWhereInput)
  OR?: Array<OrderItemWhereInput>;

  @Field(() => [OrderItemWhereInput], { nullable: true })
  @Type(() => OrderItemWhereInput)
  NOT?: Array<OrderItemWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  orderId?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  productId?: StringFilter;

  @Field(() => DecimalFilter, { nullable: true })
  @Type(() => DecimalFilter)
  price?: DecimalFilter;

  @Field(() => IntFilter, { nullable: true })
  quantity?: IntFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;

  @Field(() => OrderRelationFilter, { nullable: true })
  @Type(() => OrderRelationFilter)
  order?: OrderRelationFilter;

  @Field(() => ProductRelationFilter, { nullable: true })
  @Type(() => ProductRelationFilter)
  product?: ProductRelationFilter;
}
