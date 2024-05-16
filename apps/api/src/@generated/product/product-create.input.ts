import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { ProductToCategoryCreateNestedManyWithoutProductInput } from '../product-to-category/product-to-category-create-nested-many-without-product.input';
import { OrderItemCreateNestedManyWithoutProductInput } from '../order-item/order-item-create-nested-many-without-product.input';
import { FeedbackCreateNestedManyWithoutProductInput } from '../feedback/feedback-create-nested-many-without-product.input';
import { ImageCreateNestedManyWithoutProductInput } from '../image/image-create-nested-many-without-product.input';
import { ProductToPublisherCreateNestedManyWithoutProductInput } from '../product-to-publisher/product-to-publisher-create-nested-many-without-product.input';
import { ProductToAuthorCreateNestedManyWithoutProductInput } from '../product-to-author/product-to-author-create-nested-many-without-product.input';

@InputType()
export class ProductCreateInput {

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

    @Field(() => ProductToCategoryCreateNestedManyWithoutProductInput, {nullable:true})
    @Type(() => ProductToCategoryCreateNestedManyWithoutProductInput)
    categories?: ProductToCategoryCreateNestedManyWithoutProductInput;

    @Field(() => OrderItemCreateNestedManyWithoutProductInput, {nullable:true})
    @Type(() => OrderItemCreateNestedManyWithoutProductInput)
    orderItems?: OrderItemCreateNestedManyWithoutProductInput;

    @Field(() => FeedbackCreateNestedManyWithoutProductInput, {nullable:true})
    @Type(() => FeedbackCreateNestedManyWithoutProductInput)
    feedbacks?: FeedbackCreateNestedManyWithoutProductInput;

    @Field(() => ImageCreateNestedManyWithoutProductInput, {nullable:true})
    @Type(() => ImageCreateNestedManyWithoutProductInput)
    images?: ImageCreateNestedManyWithoutProductInput;

    @Field(() => ProductToPublisherCreateNestedManyWithoutProductInput, {nullable:true})
    @Type(() => ProductToPublisherCreateNestedManyWithoutProductInput)
    publishers?: ProductToPublisherCreateNestedManyWithoutProductInput;

    @Field(() => ProductToAuthorCreateNestedManyWithoutProductInput, {nullable:true})
    @Type(() => ProductToAuthorCreateNestedManyWithoutProductInput)
    authors?: ProductToAuthorCreateNestedManyWithoutProductInput;
}
