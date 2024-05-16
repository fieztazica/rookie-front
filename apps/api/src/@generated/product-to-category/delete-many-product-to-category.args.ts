import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductToCategoryWhereInput } from './product-to-category-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyProductToCategoryArgs {
  @Field(() => ProductToCategoryWhereInput, { nullable: true })
  @Type(() => ProductToCategoryWhereInput)
  where?: ProductToCategoryWhereInput;
}
