import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedbackWhereInput } from './feedback-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyFeedbackArgs {

    @Field(() => FeedbackWhereInput, {nullable:true})
    @Type(() => FeedbackWhereInput)
    where?: FeedbackWhereInput;
}
