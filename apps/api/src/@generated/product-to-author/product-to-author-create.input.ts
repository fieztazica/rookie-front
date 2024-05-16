import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateNestedOneWithoutAuthorsInput } from '../product/product-create-nested-one-without-authors.input';
import { Type } from 'class-transformer';
import { AuthorCreateNestedOneWithoutProductsInput } from '../author/author-create-nested-one-without-products.input';

@InputType()
export class ProductToAuthorCreateInput {
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => ProductCreateNestedOneWithoutAuthorsInput, { nullable: false })
  @Type(() => ProductCreateNestedOneWithoutAuthorsInput)
  product!: ProductCreateNestedOneWithoutAuthorsInput;

  @Field(() => AuthorCreateNestedOneWithoutProductsInput, { nullable: false })
  author!: AuthorCreateNestedOneWithoutProductsInput;
}
