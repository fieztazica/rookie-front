import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutOrderItemsInput } from './product-create-without-order-items.input';

@InputType()
export class ProductCreateOrConnectWithoutOrderItemsInput {
  @Field(() => ProductWhereUniqueInput, { nullable: false })
  @Type(() => ProductWhereUniqueInput)
  where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name'>;

  @Field(() => ProductCreateWithoutOrderItemsInput, { nullable: false })
  @Type(() => ProductCreateWithoutOrderItemsInput)
  create!: ProductCreateWithoutOrderItemsInput;
}
