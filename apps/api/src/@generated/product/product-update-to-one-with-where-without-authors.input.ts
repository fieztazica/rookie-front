import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereInput } from './product-where.input';
import { Type } from 'class-transformer';
import { ProductUpdateWithoutAuthorsInput } from './product-update-without-authors.input';

@InputType()
export class ProductUpdateToOneWithWhereWithoutAuthorsInput {
  @Field(() => ProductWhereInput, { nullable: true })
  @Type(() => ProductWhereInput)
  where?: ProductWhereInput;

  @Field(() => ProductUpdateWithoutAuthorsInput, { nullable: false })
  @Type(() => ProductUpdateWithoutAuthorsInput)
  data!: ProductUpdateWithoutAuthorsInput;
}
