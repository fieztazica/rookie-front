import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductToCategoryUpdateManyWithoutCategoryNestedInput } from '../product-to-category/product-to-category-update-many-without-category-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class CategoryUpdateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProductToCategoryUpdateManyWithoutCategoryNestedInput, {nullable:true})
    @Type(() => ProductToCategoryUpdateManyWithoutCategoryNestedInput)
    products?: ProductToCategoryUpdateManyWithoutCategoryNestedInput;
}
