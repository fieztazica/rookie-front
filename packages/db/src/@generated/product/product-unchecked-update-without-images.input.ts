import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ProductToCategoryUncheckedUpdateManyWithoutProductNestedInput } from '../product-to-category/product-to-category-unchecked-update-many-without-product-nested.input';
import { OrderItemUncheckedUpdateManyWithoutProductNestedInput } from '../order-item/order-item-unchecked-update-many-without-product-nested.input';
import { FeedbackUncheckedUpdateManyWithoutProductNestedInput } from '../feedback/feedback-unchecked-update-many-without-product-nested.input';
import { ProductToPublisherUncheckedUpdateManyWithoutProductNestedInput } from '../product-to-publisher/product-to-publisher-unchecked-update-many-without-product-nested.input';
import { ProductToAuthorUncheckedUpdateManyWithoutProductNestedInput } from '../product-to-author/product-to-author-unchecked-update-many-without-product-nested.input';

@InputType()
export class ProductUncheckedUpdateWithoutImagesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    displayName?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    price?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    salePrice?: Decimal;

    @Field(() => Float, {nullable:true})
    ratings?: number;

    @Field(() => String, {nullable:true})
    accountId?: string;

    @Field(() => Int, {nullable:true})
    storeQuantity?: number;

    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProductToCategoryUncheckedUpdateManyWithoutProductNestedInput, {nullable:true})
    @Type(() => ProductToCategoryUncheckedUpdateManyWithoutProductNestedInput)
    categories?: ProductToCategoryUncheckedUpdateManyWithoutProductNestedInput;

    @Field(() => OrderItemUncheckedUpdateManyWithoutProductNestedInput, {nullable:true})
    @Type(() => OrderItemUncheckedUpdateManyWithoutProductNestedInput)
    orderItems?: OrderItemUncheckedUpdateManyWithoutProductNestedInput;

    @Field(() => FeedbackUncheckedUpdateManyWithoutProductNestedInput, {nullable:true})
    @Type(() => FeedbackUncheckedUpdateManyWithoutProductNestedInput)
    feedbacks?: FeedbackUncheckedUpdateManyWithoutProductNestedInput;

    @Field(() => ProductToPublisherUncheckedUpdateManyWithoutProductNestedInput, {nullable:true})
    @Type(() => ProductToPublisherUncheckedUpdateManyWithoutProductNestedInput)
    publishers?: ProductToPublisherUncheckedUpdateManyWithoutProductNestedInput;

    @Field(() => ProductToAuthorUncheckedUpdateManyWithoutProductNestedInput, {nullable:true})
    @Type(() => ProductToAuthorUncheckedUpdateManyWithoutProductNestedInput)
    authors?: ProductToAuthorUncheckedUpdateManyWithoutProductNestedInput;
}
