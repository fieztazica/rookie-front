import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutProductToAuthorsInput } from './product-create-without-product-to-authors.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutProductToAuthorsInput } from './product-create-or-connect-without-product-to-authors.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductCreateNestedOneWithoutProductToAuthorsInput {

    @Field(() => ProductCreateWithoutProductToAuthorsInput, {nullable:true})
    @Type(() => ProductCreateWithoutProductToAuthorsInput)
    create?: ProductCreateWithoutProductToAuthorsInput;

    @Field(() => ProductCreateOrConnectWithoutProductToAuthorsInput, {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutProductToAuthorsInput)
    connectOrCreate?: ProductCreateOrConnectWithoutProductToAuthorsInput;

    @Field(() => ProductWhereUniqueInput, {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name'>;
}
