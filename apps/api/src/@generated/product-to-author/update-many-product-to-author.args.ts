import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductToAuthorUpdateManyMutationInput } from './product-to-author-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ProductToAuthorWhereInput } from './product-to-author-where.input';

@ArgsType()
export class UpdateManyProductToAuthorArgs {
  @Field(() => ProductToAuthorUpdateManyMutationInput, { nullable: false })
  @Type(() => ProductToAuthorUpdateManyMutationInput)
  data!: ProductToAuthorUpdateManyMutationInput;

  @Field(() => ProductToAuthorWhereInput, { nullable: true })
  @Type(() => ProductToAuthorWhereInput)
  where?: ProductToAuthorWhereInput;
}
