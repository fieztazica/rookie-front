import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutFeedbacksInput } from './product-create-without-feedbacks.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutFeedbacksInput } from './product-create-or-connect-without-feedbacks.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductCreateNestedOneWithoutFeedbacksInput {
  @Field(() => ProductCreateWithoutFeedbacksInput, { nullable: true })
  @Type(() => ProductCreateWithoutFeedbacksInput)
  create?: ProductCreateWithoutFeedbacksInput;

  @Field(() => ProductCreateOrConnectWithoutFeedbacksInput, { nullable: true })
  @Type(() => ProductCreateOrConnectWithoutFeedbacksInput)
  connectOrCreate?: ProductCreateOrConnectWithoutFeedbacksInput;

  @Field(() => ProductWhereUniqueInput, { nullable: true })
  @Type(() => ProductWhereUniqueInput)
  connect?: Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name'>;
}
