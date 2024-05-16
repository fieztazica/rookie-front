import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { StringFilter } from '../prisma/string-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class OrderItemScalarWhereInput {
  @Field(() => [OrderItemScalarWhereInput], { nullable: true })
  @Type(() => OrderItemScalarWhereInput)
  AND?: Array<OrderItemScalarWhereInput>;

  @Field(() => [OrderItemScalarWhereInput], { nullable: true })
  @Type(() => OrderItemScalarWhereInput)
  OR?: Array<OrderItemScalarWhereInput>;

  @Field(() => [OrderItemScalarWhereInput], { nullable: true })
  @Type(() => OrderItemScalarWhereInput)
  NOT?: Array<OrderItemScalarWhereInput>;

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
}
