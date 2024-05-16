import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductToAuthorWhereUniqueInput } from './product-to-author-where-unique.input';
import { Type } from 'class-transformer';
import { ProductToAuthorUpdateWithoutProductInput } from './product-to-author-update-without-product.input';
import { ProductToAuthorCreateWithoutProductInput } from './product-to-author-create-without-product.input';

@InputType()
export class ProductToAuthorUpsertWithWhereUniqueWithoutProductInput {

    @Field(() => ProductToAuthorWhereUniqueInput, {nullable:false})
    @Type(() => ProductToAuthorWhereUniqueInput)
    where!: Prisma.AtLeast<ProductToAuthorWhereUniqueInput, 'productId_authorId'>;

    @Field(() => ProductToAuthorUpdateWithoutProductInput, {nullable:false})
    @Type(() => ProductToAuthorUpdateWithoutProductInput)
    update!: ProductToAuthorUpdateWithoutProductInput;

    @Field(() => ProductToAuthorCreateWithoutProductInput, {nullable:false})
    @Type(() => ProductToAuthorCreateWithoutProductInput)
    create!: ProductToAuthorCreateWithoutProductInput;
}
