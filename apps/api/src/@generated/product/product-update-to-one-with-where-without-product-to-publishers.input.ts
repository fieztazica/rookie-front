import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereInput } from './product-where.input';
import { Type } from 'class-transformer';
import { ProductUpdateWithoutProductToPublishersInput } from './product-update-without-product-to-publishers.input';

@InputType()
export class ProductUpdateToOneWithWhereWithoutProductToPublishersInput {
  @Field(() => ProductWhereInput, { nullable: true })
  @Type(() => ProductWhereInput)
  where?: ProductWhereInput;

  @Field(() => ProductUpdateWithoutProductToPublishersInput, {
    nullable: false,
  })
  @Type(() => ProductUpdateWithoutProductToPublishersInput)
  data!: ProductUpdateWithoutProductToPublishersInput;
}
