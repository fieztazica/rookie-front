import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedbackWhereInput } from './feedback-where.input';
import { Type } from 'class-transformer';
import { FeedbackOrderByWithRelationInput } from './feedback-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { FeedbackWhereUniqueInput } from './feedback-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FeedbackScalarFieldEnum } from './feedback-scalar-field.enum';

@ArgsType()
export class FindFirstFeedbackOrThrowArgs {
  @Field(() => FeedbackWhereInput, { nullable: true })
  @Type(() => FeedbackWhereInput)
  where?: FeedbackWhereInput;

  @Field(() => [FeedbackOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<FeedbackOrderByWithRelationInput>;

  @Field(() => FeedbackWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<FeedbackWhereUniqueInput, 'id'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [FeedbackScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof FeedbackScalarFieldEnum>;
}
