import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutProductToAuthorsInput } from './product-create-without-product-to-authors.input';

@InputType()
export class ProductCreateOrConnectWithoutProductToAuthorsInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name'>;

    @Field(() => ProductCreateWithoutProductToAuthorsInput, {nullable:false})
    @Type(() => ProductCreateWithoutProductToAuthorsInput)
    create!: ProductCreateWithoutProductToAuthorsInput;
}
