import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereInput } from './product-where.input';
import { Type } from 'class-transformer';
import { ProductUpdateWithoutOrderItemsInput } from './product-update-without-order-items.input';

@InputType()
export class ProductUpdateToOneWithWhereWithoutOrderItemsInput {
  @Field(() => ProductWhereInput, { nullable: true })
  @Type(() => ProductWhereInput)
  where?: ProductWhereInput;

  @Field(() => ProductUpdateWithoutOrderItemsInput, { nullable: false })
  @Type(() => ProductUpdateWithoutOrderItemsInput)
  data!: ProductUpdateWithoutOrderItemsInput;
}
