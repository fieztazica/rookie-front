import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ProductCreateNestedOneWithoutFeedbacksInput } from '../product/product-create-nested-one-without-feedbacks.input';
import { Type } from 'class-transformer';

@InputType()
export class FeedbackCreateWithoutCustomerInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: false })
  message!: string;

  @Field(() => Int, { nullable: false })
  rating!: number;

  @Field(() => String, { nullable: true })
  status?: string;

  @Field(() => Boolean, { nullable: true })
  deleted?: boolean;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => ProductCreateNestedOneWithoutFeedbacksInput, { nullable: false })
  @Type(() => ProductCreateNestedOneWithoutFeedbacksInput)
  product!: ProductCreateNestedOneWithoutFeedbacksInput;
}
