import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedbackCreateManyInput } from './feedback-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyFeedbackArgs {

    @Field(() => [FeedbackCreateManyInput], {nullable:false})
    @Type(() => FeedbackCreateManyInput)
    data!: Array<FeedbackCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
