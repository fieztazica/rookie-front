import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductToAuthorWhereUniqueInput } from './product-to-author-where-unique.input';
import { Type } from 'class-transformer';
import { ProductToAuthorUpdateWithoutAuthorInput } from './product-to-author-update-without-author.input';

@InputType()
export class ProductToAuthorUpdateWithWhereUniqueWithoutAuthorInput {

    @Field(() => ProductToAuthorWhereUniqueInput, {nullable:false})
    @Type(() => ProductToAuthorWhereUniqueInput)
    where!: Prisma.AtLeast<ProductToAuthorWhereUniqueInput, 'productId_authorId'>;

    @Field(() => ProductToAuthorUpdateWithoutAuthorInput, {nullable:false})
    @Type(() => ProductToAuthorUpdateWithoutAuthorInput)
    data!: ProductToAuthorUpdateWithoutAuthorInput;
}
