import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CategoryCreateInput } from './create-category.input';

@InputType()
export class UpdateCategoryInput extends PartialType(CategoryCreateInput) {
  @Field(() => String)
  id: string;
}
