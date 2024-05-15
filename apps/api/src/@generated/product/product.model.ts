import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { ProductToCategory } from '../product-to-category/product-to-category.model';
import { OrderItem } from '../order-item/order-item.model';
import { Feedback } from '../feedback/feedback.model';
import { Image } from '../image/image.model';
import { ProductToPublisher } from '../product-to-publisher/product-to-publisher.model';
import { ProductToAuthor } from '../product-to-author/product-to-author.model';
import { ProductCount } from './product-count.output';

/**
 * @@deny('read', deleted)
 */
@ObjectType({description:"@@deny('read', deleted)"})
export class Product {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    displayName!: string | null;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => GraphQLDecimal, {nullable:false})
    price!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    salePrice!: Decimal | null;

    @Field(() => String, {nullable:true})
    accountId!: string | null;

    /**
     * @omit
     */
    @Field(() => Boolean, {nullable:false,defaultValue:false,description:'@omit'})
    deleted!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [ProductToCategory], {nullable:true})
    categories?: Array<ProductToCategory>;

    @Field(() => [OrderItem], {nullable:true})
    orderItems?: Array<OrderItem>;

    @Field(() => [Feedback], {nullable:true})
    feedbacks?: Array<Feedback>;

    @Field(() => [Image], {nullable:true})
    images?: Array<Image>;

    @Field(() => [ProductToPublisher], {nullable:true})
    productToPublishers?: Array<ProductToPublisher>;

    @Field(() => [ProductToAuthor], {nullable:true})
    productToAuthors?: Array<ProductToAuthor>;

    @Field(() => ProductCount, {nullable:false})
    _count?: ProductCount;
}
