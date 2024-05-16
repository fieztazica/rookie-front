import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedbackUpdateManyMutationInput } from './feedback-update-many-mutation.input';
import { Type } from 'class-transformer';
import { FeedbackWhereInput } from './feedback-where.input';

@ArgsType()
export class UpdateManyFeedbackArgs {

    @Field(() => FeedbackUpdateManyMutationInput, {nullable:false})
    @Type(() => FeedbackUpdateManyMutationInput)
    data!: FeedbackUpdateManyMutationInput;

    @Field(() => FeedbackWhereInput, {nullable:true})
    @Type(() => FeedbackWhereInput)
    where?: FeedbackWhereInput;
}
