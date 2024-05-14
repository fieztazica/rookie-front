import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ProductToCategory } from '../product-to-category/product-to-category.model';
import { CategoryCount } from './category-count.output';

/**
 * @@deny('read', deleted)
 */
@ObjectType({description:"@@deny('read', deleted)"})
export class Category {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => String, {nullable:true})
    displayName!: string | null;

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
    products?: Array<ProductToCategory>;

    @Field(() => CategoryCount, {nullable:false})
    _count?: CategoryCount;
}
