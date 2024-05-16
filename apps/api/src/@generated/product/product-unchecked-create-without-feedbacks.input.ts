import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { ProductToCategoryUncheckedCreateNestedManyWithoutProductInput } from '../product-to-category/product-to-category-unchecked-create-nested-many-without-product.input';
import { OrderItemUncheckedCreateNestedManyWithoutProductInput } from '../order-item/order-item-unchecked-create-nested-many-without-product.input';
import { ImageUncheckedCreateNestedManyWithoutProductInput } from '../image/image-unchecked-create-nested-many-without-product.input';
import { ProductToPublisherUncheckedCreateNestedManyWithoutProductInput } from '../product-to-publisher/product-to-publisher-unchecked-create-nested-many-without-product.input';
import { ProductToAuthorUncheckedCreateNestedManyWithoutProductInput } from '../product-to-author/product-to-author-unchecked-create-nested-many-without-product.input';

@InputType()
export class ProductUncheckedCreateWithoutFeedbacksInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    displayName?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    price!: Decimal;

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

    @Field(() => ProductToCategoryUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    @Type(() => ProductToCategoryUncheckedCreateNestedManyWithoutProductInput)
    categories?: ProductToCategoryUncheckedCreateNestedManyWithoutProductInput;

    @Field(() => OrderItemUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    @Type(() => OrderItemUncheckedCreateNestedManyWithoutProductInput)
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutProductInput;

    @Field(() => ImageUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    @Type(() => ImageUncheckedCreateNestedManyWithoutProductInput)
    images?: ImageUncheckedCreateNestedManyWithoutProductInput;

    @Field(() => ProductToPublisherUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    @Type(() => ProductToPublisherUncheckedCreateNestedManyWithoutProductInput)
    publishers?: ProductToPublisherUncheckedCreateNestedManyWithoutProductInput;

    @Field(() => ProductToAuthorUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    @Type(() => ProductToAuthorUncheckedCreateNestedManyWithoutProductInput)
    authors?: ProductToAuthorUncheckedCreateNestedManyWithoutProductInput;
}
