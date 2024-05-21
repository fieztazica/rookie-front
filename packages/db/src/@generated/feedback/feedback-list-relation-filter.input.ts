import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedbackWhereInput } from './feedback-where.input';

@InputType()
export class FeedbackListRelationFilter {

    @Field(() => FeedbackWhereInput, {nullable:true})
    every?: FeedbackWhereInput;

    @Field(() => FeedbackWhereInput, {nullable:true})
    some?: FeedbackWhereInput;

    @Field(() => FeedbackWhereInput, {nullable:true})
    none?: FeedbackWhereInput;
}
