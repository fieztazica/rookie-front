import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUpdateWithoutProductToAuthorsInput } from './product-update-without-product-to-authors.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutProductToAuthorsInput } from './product-create-without-product-to-authors.input';
import { ProductWhereInput } from './product-where.input';

@InputType()
export class ProductUpsertWithoutProductToAuthorsInput {
  @Field(() => ProductUpdateWithoutProductToAuthorsInput, { nullable: false })
  @Type(() => ProductUpdateWithoutProductToAuthorsInput)
  update!: ProductUpdateWithoutProductToAuthorsInput;

  @Field(() => ProductCreateWithoutProductToAuthorsInput, { nullable: false })
  @Type(() => ProductCreateWithoutProductToAuthorsInput)
  create!: ProductCreateWithoutProductToAuthorsInput;

  @Field(() => ProductWhereInput, { nullable: true })
  @Type(() => ProductWhereInput)
  where?: ProductWhereInput;
}
