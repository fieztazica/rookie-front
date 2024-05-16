import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedbackCreateWithoutProductInput } from './feedback-create-without-product.input';
import { Type } from 'class-transformer';
import { FeedbackCreateOrConnectWithoutProductInput } from './feedback-create-or-connect-without-product.input';
import { FeedbackUpsertWithWhereUniqueWithoutProductInput } from './feedback-upsert-with-where-unique-without-product.input';
import { FeedbackCreateManyProductInputEnvelope } from './feedback-create-many-product-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FeedbackWhereUniqueInput } from './feedback-where-unique.input';
import { FeedbackUpdateWithWhereUniqueWithoutProductInput } from './feedback-update-with-where-unique-without-product.input';
import { FeedbackUpdateManyWithWhereWithoutProductInput } from './feedback-update-many-with-where-without-product.input';
import { FeedbackScalarWhereInput } from './feedback-scalar-where.input';

@InputType()
export class FeedbackUncheckedUpdateManyWithoutProductNestedInput {
  @Field(() => [FeedbackCreateWithoutProductInput], { nullable: true })
  @Type(() => FeedbackCreateWithoutProductInput)
  create?: Array<FeedbackCreateWithoutProductInput>;

  @Field(() => [FeedbackCreateOrConnectWithoutProductInput], { nullable: true })
  @Type(() => FeedbackCreateOrConnectWithoutProductInput)
  connectOrCreate?: Array<FeedbackCreateOrConnectWithoutProductInput>;

  @Field(() => [FeedbackUpsertWithWhereUniqueWithoutProductInput], {
    nullable: true,
  })
  @Type(() => FeedbackUpsertWithWhereUniqueWithoutProductInput)
  upsert?: Array<FeedbackUpsertWithWhereUniqueWithoutProductInput>;

  @Field(() => FeedbackCreateManyProductInputEnvelope, { nullable: true })
  @Type(() => FeedbackCreateManyProductInputEnvelope)
  createMany?: FeedbackCreateManyProductInputEnvelope;

  @Field(() => [FeedbackWhereUniqueInput], { nullable: true })
  @Type(() => FeedbackWhereUniqueInput)
  set?: Array<Prisma.AtLeast<FeedbackWhereUniqueInput, 'id'>>;

  @Field(() => [FeedbackWhereUniqueInput], { nullable: true })
  @Type(() => FeedbackWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<FeedbackWhereUniqueInput, 'id'>>;

  @Field(() => [FeedbackWhereUniqueInput], { nullable: true })
  @Type(() => FeedbackWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<FeedbackWhereUniqueInput, 'id'>>;

  @Field(() => [FeedbackWhereUniqueInput], { nullable: true })
  @Type(() => FeedbackWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<FeedbackWhereUniqueInput, 'id'>>;

  @Field(() => [FeedbackUpdateWithWhereUniqueWithoutProductInput], {
    nullable: true,
  })
  @Type(() => FeedbackUpdateWithWhereUniqueWithoutProductInput)
  update?: Array<FeedbackUpdateWithWhereUniqueWithoutProductInput>;

  @Field(() => [FeedbackUpdateManyWithWhereWithoutProductInput], {
    nullable: true,
  })
  @Type(() => FeedbackUpdateManyWithWhereWithoutProductInput)
  updateMany?: Array<FeedbackUpdateManyWithWhereWithoutProductInput>;

  @Field(() => [FeedbackScalarWhereInput], { nullable: true })
  @Type(() => FeedbackScalarWhereInput)
  deleteMany?: Array<FeedbackScalarWhereInput>;
}
