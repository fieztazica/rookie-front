import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUpdateWithoutFeedbacksInput } from './product-update-without-feedbacks.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutFeedbacksInput } from './product-create-without-feedbacks.input';
import { ProductWhereInput } from './product-where.input';

@InputType()
export class ProductUpsertWithoutFeedbacksInput {
  @Field(() => ProductUpdateWithoutFeedbacksInput, { nullable: false })
  @Type(() => ProductUpdateWithoutFeedbacksInput)
  update!: ProductUpdateWithoutFeedbacksInput;

  @Field(() => ProductCreateWithoutFeedbacksInput, { nullable: false })
  @Type(() => ProductCreateWithoutFeedbacksInput)
  create!: ProductCreateWithoutFeedbacksInput;

  @Field(() => ProductWhereInput, { nullable: true })
  @Type(() => ProductWhereInput)
  where?: ProductWhereInput;
}
