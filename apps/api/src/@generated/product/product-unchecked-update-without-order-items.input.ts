import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { ProductToCategoryUncheckedUpdateManyWithoutProductNestedInput } from '../product-to-category/product-to-category-unchecked-update-many-without-product-nested.input';
import { FeedbackUncheckedUpdateManyWithoutProductNestedInput } from '../feedback/feedback-unchecked-update-many-without-product-nested.input';
import { ImageUncheckedUpdateManyWithoutProductNestedInput } from '../image/image-unchecked-update-many-without-product-nested.input';

@InputType()
export class ProductUncheckedUpdateWithoutOrderItemsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    price?: Decimal;

    @Field(() => String, {nullable:true})
    accountId?: string;

    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProductToCategoryUncheckedUpdateManyWithoutProductNestedInput, {nullable:true})
    @Type(() => ProductToCategoryUncheckedUpdateManyWithoutProductNestedInput)
    categories?: ProductToCategoryUncheckedUpdateManyWithoutProductNestedInput;

    @Field(() => FeedbackUncheckedUpdateManyWithoutProductNestedInput, {nullable:true})
    @Type(() => FeedbackUncheckedUpdateManyWithoutProductNestedInput)
    feedbacks?: FeedbackUncheckedUpdateManyWithoutProductNestedInput;

    @Field(() => ImageUncheckedUpdateManyWithoutProductNestedInput, {nullable:true})
    @Type(() => ImageUncheckedUpdateManyWithoutProductNestedInput)
    images?: ImageUncheckedUpdateManyWithoutProductNestedInput;
}
