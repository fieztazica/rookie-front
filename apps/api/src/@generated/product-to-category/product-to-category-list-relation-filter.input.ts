import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductToCategoryWhereInput } from './product-to-category-where.input';

@InputType()
export class ProductToCategoryListRelationFilter {
  @Field(() => ProductToCategoryWhereInput, { nullable: true })
  every?: ProductToCategoryWhereInput;

  @Field(() => ProductToCategoryWhereInput, { nullable: true })
  some?: ProductToCategoryWhereInput;

  @Field(() => ProductToCategoryWhereInput, { nullable: true })
  none?: ProductToCategoryWhereInput;
}
