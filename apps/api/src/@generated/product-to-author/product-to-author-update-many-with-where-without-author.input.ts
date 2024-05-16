import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductToAuthorScalarWhereInput } from './product-to-author-scalar-where.input';
import { Type } from 'class-transformer';
import { ProductToAuthorUpdateManyMutationInput } from './product-to-author-update-many-mutation.input';

@InputType()
export class ProductToAuthorUpdateManyWithWhereWithoutAuthorInput {
  @Field(() => ProductToAuthorScalarWhereInput, { nullable: false })
  @Type(() => ProductToAuthorScalarWhereInput)
  where!: ProductToAuthorScalarWhereInput;

  @Field(() => ProductToAuthorUpdateManyMutationInput, { nullable: false })
  @Type(() => ProductToAuthorUpdateManyMutationInput)
  data!: ProductToAuthorUpdateManyMutationInput;
}
