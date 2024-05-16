import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutFeedbacksInput } from './product-create-without-feedbacks.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutFeedbacksInput } from './product-create-or-connect-without-feedbacks.input';
import { ProductUpsertWithoutFeedbacksInput } from './product-upsert-without-feedbacks.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateToOneWithWhereWithoutFeedbacksInput } from './product-update-to-one-with-where-without-feedbacks.input';

@InputType()
export class ProductUpdateOneRequiredWithoutFeedbacksNestedInput {

    @Field(() => ProductCreateWithoutFeedbacksInput, {nullable:true})
    @Type(() => ProductCreateWithoutFeedbacksInput)
    create?: ProductCreateWithoutFeedbacksInput;

    @Field(() => ProductCreateOrConnectWithoutFeedbacksInput, {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutFeedbacksInput)
    connectOrCreate?: ProductCreateOrConnectWithoutFeedbacksInput;

    @Field(() => ProductUpsertWithoutFeedbacksInput, {nullable:true})
    @Type(() => ProductUpsertWithoutFeedbacksInput)
    upsert?: ProductUpsertWithoutFeedbacksInput;

    @Field(() => ProductWhereUniqueInput, {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name'>;

    @Field(() => ProductUpdateToOneWithWhereWithoutFeedbacksInput, {nullable:true})
    @Type(() => ProductUpdateToOneWithWhereWithoutFeedbacksInput)
    update?: ProductUpdateToOneWithWhereWithoutFeedbacksInput;
}
