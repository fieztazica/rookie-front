import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductToPublisherUpdateInput } from './product-to-publisher-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ProductToPublisherWhereUniqueInput } from './product-to-publisher-where-unique.input';

@ArgsType()
export class UpdateOneProductToPublisherArgs {

    @Field(() => ProductToPublisherUpdateInput, {nullable:false})
    @Type(() => ProductToPublisherUpdateInput)
    data!: ProductToPublisherUpdateInput;

    @Field(() => ProductToPublisherWhereUniqueInput, {nullable:false})
    @Type(() => ProductToPublisherWhereUniqueInput)
    where!: Prisma.AtLeast<ProductToPublisherWhereUniqueInput, 'productId_publisherId'>;
}
