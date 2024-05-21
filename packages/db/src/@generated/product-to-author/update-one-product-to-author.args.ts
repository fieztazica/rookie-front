import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductToAuthorUpdateInput } from './product-to-author-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ProductToAuthorWhereUniqueInput } from './product-to-author-where-unique.input';

@ArgsType()
export class UpdateOneProductToAuthorArgs {

    @Field(() => ProductToAuthorUpdateInput, {nullable:false})
    @Type(() => ProductToAuthorUpdateInput)
    data!: ProductToAuthorUpdateInput;

    @Field(() => ProductToAuthorWhereUniqueInput, {nullable:false})
    @Type(() => ProductToAuthorWhereUniqueInput)
    where!: Prisma.AtLeast<ProductToAuthorWhereUniqueInput, 'productId_authorId'>;
}
