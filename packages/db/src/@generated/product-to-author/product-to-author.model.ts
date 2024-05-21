import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Product } from '../product/product.model';
import { Author } from '../author/author.model';

@ObjectType()
export class ProductToAuthor {

    @Field(() => String, {nullable:false})
    productId!: string;

    @Field(() => String, {nullable:false})
    authorId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Product, {nullable:false})
    product?: Product;

    @Field(() => Author, {nullable:false})
    author?: Author;
}
