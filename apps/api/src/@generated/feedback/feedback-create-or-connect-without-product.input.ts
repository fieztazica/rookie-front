import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeedbackWhereUniqueInput } from './feedback-where-unique.input';
import { Type } from 'class-transformer';
import { FeedbackCreateWithoutProductInput } from './feedback-create-without-product.input';

@InputType()
export class FeedbackCreateOrConnectWithoutProductInput {
  @Field(() => FeedbackWhereUniqueInput, { nullable: false })
  @Type(() => FeedbackWhereUniqueInput)
  where!: Prisma.AtLeast<FeedbackWhereUniqueInput, 'id'>;

  @Field(() => FeedbackCreateWithoutProductInput, { nullable: false })
  @Type(() => FeedbackCreateWithoutProductInput)
  create!: FeedbackCreateWithoutProductInput;
}
