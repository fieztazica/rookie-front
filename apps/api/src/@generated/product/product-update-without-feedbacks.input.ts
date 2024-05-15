import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { ProductToCategoryUpdateManyWithoutProductNestedInput } from '../product-to-category/product-to-category-update-many-without-product-nested.input';
import { OrderItemUpdateManyWithoutProductNestedInput } from '../order-item/order-item-update-many-without-product-nested.input';
import { ImageUpdateManyWithoutProductNestedInput } from '../image/image-update-many-without-product-nested.input';
import { ProductToPublisherUpdateManyWithoutProductNestedInput } from '../product-to-publisher/product-to-publisher-update-many-without-product-nested.input';
import { ProductToAuthorUpdateManyWithoutProductNestedInput } from '../product-to-author/product-to-author-update-many-without-product-nested.input';

@InputType()
export class ProductUpdateWithoutFeedbacksInput {

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

    @Field(() => String, {nullable:true})
    accountId?: string;

    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProductToCategoryUpdateManyWithoutProductNestedInput, {nullable:true})
    @Type(() => ProductToCategoryUpdateManyWithoutProductNestedInput)
    categories?: ProductToCategoryUpdateManyWithoutProductNestedInput;

    @Field(() => OrderItemUpdateManyWithoutProductNestedInput, {nullable:true})
    @Type(() => OrderItemUpdateManyWithoutProductNestedInput)
    orderItems?: OrderItemUpdateManyWithoutProductNestedInput;

    @Field(() => ImageUpdateManyWithoutProductNestedInput, {nullable:true})
    @Type(() => ImageUpdateManyWithoutProductNestedInput)
    images?: ImageUpdateManyWithoutProductNestedInput;

    @Field(() => ProductToPublisherUpdateManyWithoutProductNestedInput, {nullable:true})
    @Type(() => ProductToPublisherUpdateManyWithoutProductNestedInput)
    productToPublishers?: ProductToPublisherUpdateManyWithoutProductNestedInput;

    @Field(() => ProductToAuthorUpdateManyWithoutProductNestedInput, {nullable:true})
    @Type(() => ProductToAuthorUpdateManyWithoutProductNestedInput)
    productToAuthors?: ProductToAuthorUpdateManyWithoutProductNestedInput;
}
