import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Category } from '../category/category.model';
import { Product } from '../product/product.model';

@ObjectType()
export class ProductToCategory {

    @Field(() => String, {nullable:false})
    productId!: string;

    @Field(() => String, {nullable:false})
    categoryId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Category, {nullable:false})
    category?: Category;

    @Field(() => Product, {nullable:false})
    product?: Product;
}
