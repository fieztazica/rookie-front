import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUpdateWithoutPublishersInput } from './product-update-without-publishers.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutPublishersInput } from './product-create-without-publishers.input';
import { ProductWhereInput } from './product-where.input';

@InputType()
export class ProductUpsertWithoutPublishersInput {
  @Field(() => ProductUpdateWithoutPublishersInput, { nullable: false })
  @Type(() => ProductUpdateWithoutPublishersInput)
  update!: ProductUpdateWithoutPublishersInput;

  @Field(() => ProductCreateWithoutPublishersInput, { nullable: false })
  @Type(() => ProductCreateWithoutPublishersInput)
  create!: ProductCreateWithoutPublishersInput;

  @Field(() => ProductWhereInput, { nullable: true })
  @Type(() => ProductWhereInput)
  where?: ProductWhereInput;
}
