import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';
import { OrderUpdateOneRequiredWithoutOrderItemsNestedInput } from '../order/order-update-one-required-without-order-items-nested.input';
import { ProductUpdateOneRequiredWithoutOrderItemsNestedInput } from '../product/product-update-one-required-without-order-items-nested.input';

@InputType()
export class OrderItemUpdateInput {
  @Field(() => GraphQLDecimal, { nullable: true })
  @Type(() => Object)
  @Transform(transformToDecimal)
  price?: Decimal;

  @Field(() => Int, { nullable: true })
  quantity?: number;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => OrderUpdateOneRequiredWithoutOrderItemsNestedInput, {
    nullable: true,
  })
  @Type(() => OrderUpdateOneRequiredWithoutOrderItemsNestedInput)
  order?: OrderUpdateOneRequiredWithoutOrderItemsNestedInput;

  @Field(() => ProductUpdateOneRequiredWithoutOrderItemsNestedInput, {
    nullable: true,
  })
  @Type(() => ProductUpdateOneRequiredWithoutOrderItemsNestedInput)
  product?: ProductUpdateOneRequiredWithoutOrderItemsNestedInput;
}
