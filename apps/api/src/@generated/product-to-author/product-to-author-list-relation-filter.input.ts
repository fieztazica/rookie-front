import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductToAuthorWhereInput } from './product-to-author-where.input';

@InputType()
export class ProductToAuthorListRelationFilter {
  @Field(() => ProductToAuthorWhereInput, { nullable: true })
  every?: ProductToAuthorWhereInput;

  @Field(() => ProductToAuthorWhereInput, { nullable: true })
  some?: ProductToAuthorWhereInput;

  @Field(() => ProductToAuthorWhereInput, { nullable: true })
  none?: ProductToAuthorWhereInput;
}
