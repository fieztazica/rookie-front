import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ProductToCategoryProductIdCategoryIdCompoundUniqueInput {
  @Field(() => String, { nullable: false })
  productId!: string;

  @Field(() => String, { nullable: false })
  categoryId!: string;
}
