import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutAuthorsInput } from './product-create-without-authors.input';

@InputType()
export class ProductCreateOrConnectWithoutAuthorsInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name'>;

    @Field(() => ProductCreateWithoutAuthorsInput, {nullable:false})
    @Type(() => ProductCreateWithoutAuthorsInput)
    create!: ProductCreateWithoutAuthorsInput;
}
