import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUpdateWithoutCategoriesInput } from './product-update-without-categories.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutCategoriesInput } from './product-create-without-categories.input';
import { ProductWhereInput } from './product-where.input';

@InputType()
export class ProductUpsertWithoutCategoriesInput {

    @Field(() => ProductUpdateWithoutCategoriesInput, {nullable:false})
    @Type(() => ProductUpdateWithoutCategoriesInput)
    update!: ProductUpdateWithoutCategoriesInput;

    @Field(() => ProductCreateWithoutCategoriesInput, {nullable:false})
    @Type(() => ProductCreateWithoutCategoriesInput)
    create!: ProductCreateWithoutCategoriesInput;

    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: ProductWhereInput;
}
