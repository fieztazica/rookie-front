import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateNestedOneWithoutCategoriesInput } from '../product/product-create-nested-one-without-categories.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductToCategoryCreateWithoutCategoryInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProductCreateNestedOneWithoutCategoriesInput, {nullable:false})
    @Type(() => ProductCreateNestedOneWithoutCategoriesInput)
    product!: ProductCreateNestedOneWithoutCategoriesInput;
}
