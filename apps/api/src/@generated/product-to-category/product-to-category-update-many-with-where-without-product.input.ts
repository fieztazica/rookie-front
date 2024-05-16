import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductToCategoryScalarWhereInput } from './product-to-category-scalar-where.input';
import { Type } from 'class-transformer';
import { ProductToCategoryUpdateManyMutationInput } from './product-to-category-update-many-mutation.input';

@InputType()
export class ProductToCategoryUpdateManyWithWhereWithoutProductInput {
  @Field(() => ProductToCategoryScalarWhereInput, { nullable: false })
  @Type(() => ProductToCategoryScalarWhereInput)
  where!: ProductToCategoryScalarWhereInput;

  @Field(() => ProductToCategoryUpdateManyMutationInput, { nullable: false })
  @Type(() => ProductToCategoryUpdateManyMutationInput)
  data!: ProductToCategoryUpdateManyMutationInput;
}
