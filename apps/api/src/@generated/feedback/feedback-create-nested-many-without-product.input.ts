import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedbackCreateWithoutProductInput } from './feedback-create-without-product.input';
import { Type } from 'class-transformer';
import { FeedbackCreateOrConnectWithoutProductInput } from './feedback-create-or-connect-without-product.input';
import { FeedbackCreateManyProductInputEnvelope } from './feedback-create-many-product-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FeedbackWhereUniqueInput } from './feedback-where-unique.input';

@InputType()
export class FeedbackCreateNestedManyWithoutProductInput {
  @Field(() => [FeedbackCreateWithoutProductInput], { nullable: true })
  @Type(() => FeedbackCreateWithoutProductInput)
  create?: Array<FeedbackCreateWithoutProductInput>;

  @Field(() => [FeedbackCreateOrConnectWithoutProductInput], { nullable: true })
  @Type(() => FeedbackCreateOrConnectWithoutProductInput)
  connectOrCreate?: Array<FeedbackCreateOrConnectWithoutProductInput>;

  @Field(() => FeedbackCreateManyProductInputEnvelope, { nullable: true })
  @Type(() => FeedbackCreateManyProductInputEnvelope)
  createMany?: FeedbackCreateManyProductInputEnvelope;

  @Field(() => [FeedbackWhereUniqueInput], { nullable: true })
  @Type(() => FeedbackWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<FeedbackWhereUniqueInput, 'id'>>;
}
