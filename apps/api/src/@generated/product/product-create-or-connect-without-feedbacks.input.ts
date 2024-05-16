import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutFeedbacksInput } from './product-create-without-feedbacks.input';

@InputType()
export class ProductCreateOrConnectWithoutFeedbacksInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name'>;

    @Field(() => ProductCreateWithoutFeedbacksInput, {nullable:false})
    @Type(() => ProductCreateWithoutFeedbacksInput)
    create!: ProductCreateWithoutFeedbacksInput;
}
