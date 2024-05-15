import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUpdateWithoutProductToPublishersInput } from './product-update-without-product-to-publishers.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutProductToPublishersInput } from './product-create-without-product-to-publishers.input';
import { ProductWhereInput } from './product-where.input';

@InputType()
export class ProductUpsertWithoutProductToPublishersInput {

    @Field(() => ProductUpdateWithoutProductToPublishersInput, {nullable:false})
    @Type(() => ProductUpdateWithoutProductToPublishersInput)
    update!: ProductUpdateWithoutProductToPublishersInput;

    @Field(() => ProductCreateWithoutProductToPublishersInput, {nullable:false})
    @Type(() => ProductCreateWithoutProductToPublishersInput)
    create!: ProductCreateWithoutProductToPublishersInput;

    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: ProductWhereInput;
}
