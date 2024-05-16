import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUpdateOneRequiredWithoutCategoriesNestedInput } from '../product/product-update-one-required-without-categories-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductToCategoryUpdateWithoutCategoryInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProductUpdateOneRequiredWithoutCategoriesNestedInput, {nullable:true})
    @Type(() => ProductUpdateOneRequiredWithoutCategoriesNestedInput)
    product?: ProductUpdateOneRequiredWithoutCategoriesNestedInput;
}
