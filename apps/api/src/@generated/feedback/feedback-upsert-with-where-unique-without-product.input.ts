import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeedbackWhereUniqueInput } from './feedback-where-unique.input';
import { Type } from 'class-transformer';
import { FeedbackUpdateWithoutProductInput } from './feedback-update-without-product.input';
import { FeedbackCreateWithoutProductInput } from './feedback-create-without-product.input';

@InputType()
export class FeedbackUpsertWithWhereUniqueWithoutProductInput {

    @Field(() => FeedbackWhereUniqueInput, {nullable:false})
    @Type(() => FeedbackWhereUniqueInput)
    where!: Prisma.AtLeast<FeedbackWhereUniqueInput, 'id'>;

    @Field(() => FeedbackUpdateWithoutProductInput, {nullable:false})
    @Type(() => FeedbackUpdateWithoutProductInput)
    update!: FeedbackUpdateWithoutProductInput;

    @Field(() => FeedbackCreateWithoutProductInput, {nullable:false})
    @Type(() => FeedbackCreateWithoutProductInput)
    create!: FeedbackCreateWithoutProductInput;
}
