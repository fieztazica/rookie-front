import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUpdateWithoutOrderItemsInput } from './product-update-without-order-items.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutOrderItemsInput } from './product-create-without-order-items.input';
import { ProductWhereInput } from './product-where.input';

@InputType()
export class ProductUpsertWithoutOrderItemsInput {
  @Field(() => ProductUpdateWithoutOrderItemsInput, { nullable: false })
  @Type(() => ProductUpdateWithoutOrderItemsInput)
  update!: ProductUpdateWithoutOrderItemsInput;

  @Field(() => ProductCreateWithoutOrderItemsInput, { nullable: false })
  @Type(() => ProductCreateWithoutOrderItemsInput)
  create!: ProductCreateWithoutOrderItemsInput;

  @Field(() => ProductWhereInput, { nullable: true })
  @Type(() => ProductWhereInput)
  where?: ProductWhereInput;
}
