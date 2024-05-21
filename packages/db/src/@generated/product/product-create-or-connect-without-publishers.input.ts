import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutPublishersInput } from './product-create-without-publishers.input';

@InputType()
export class ProductCreateOrConnectWithoutPublishersInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name'>;

    @Field(() => ProductCreateWithoutPublishersInput, {nullable:false})
    @Type(() => ProductCreateWithoutPublishersInput)
    create!: ProductCreateWithoutPublishersInput;
}
