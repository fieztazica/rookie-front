import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereInput } from './product-where.input';
import { Type } from 'class-transformer';
import { ProductUpdateWithoutFeedbacksInput } from './product-update-without-feedbacks.input';

@InputType()
export class ProductUpdateToOneWithWhereWithoutFeedbacksInput {

    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: ProductWhereInput;

    @Field(() => ProductUpdateWithoutFeedbacksInput, {nullable:false})
    @Type(() => ProductUpdateWithoutFeedbacksInput)
    data!: ProductUpdateWithoutFeedbacksInput;
}
