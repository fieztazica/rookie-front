import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutCategoriesInput } from './product-create-without-categories.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutCategoriesInput } from './product-create-or-connect-without-categories.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductCreateNestedOneWithoutCategoriesInput {

    @Field(() => ProductCreateWithoutCategoriesInput, {nullable:true})
    @Type(() => ProductCreateWithoutCategoriesInput)
    create?: ProductCreateWithoutCategoriesInput;

    @Field(() => ProductCreateOrConnectWithoutCategoriesInput, {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutCategoriesInput)
    connectOrCreate?: ProductCreateOrConnectWithoutCategoriesInput;

    @Field(() => ProductWhereUniqueInput, {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name'>;
}
