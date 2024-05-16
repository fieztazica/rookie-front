import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Product } from '../product/product.model';
import { Publisher } from '../publisher/publisher.model';

@ObjectType()
export class ProductToPublisher {

    @Field(() => String, {nullable:false})
    productId!: string;

    @Field(() => String, {nullable:false})
    publisherId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Product, {nullable:false})
    product?: Product;

    @Field(() => Publisher, {nullable:false})
    publisher?: Publisher;
}
