import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedbackCreateManyProductInput } from './feedback-create-many-product.input';
import { Type } from 'class-transformer';

@InputType()
export class FeedbackCreateManyProductInputEnvelope {

    @Field(() => [FeedbackCreateManyProductInput], {nullable:false})
    @Type(() => FeedbackCreateManyProductInput)
    data!: Array<FeedbackCreateManyProductInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
