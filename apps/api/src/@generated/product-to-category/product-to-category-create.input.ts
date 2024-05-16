import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateNestedOneWithoutProductsInput } from '../category/category-create-nested-one-without-products.input';
import { ProductCreateNestedOneWithoutCategoriesInput } from '../product/product-create-nested-one-without-categories.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductToCategoryCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => CategoryCreateNestedOneWithoutProductsInput, {nullable:false})
    category!: CategoryCreateNestedOneWithoutProductsInput;

    @Field(() => ProductCreateNestedOneWithoutCategoriesInput, {nullable:false})
    @Type(() => ProductCreateNestedOneWithoutCategoriesInput)
    product!: ProductCreateNestedOneWithoutCategoriesInput;
}
