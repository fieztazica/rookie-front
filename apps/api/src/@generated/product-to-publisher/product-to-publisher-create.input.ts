import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateNestedOneWithoutProductToPublishersInput } from '../product/product-create-nested-one-without-product-to-publishers.input';
import { Type } from 'class-transformer';
import { PublisherCreateNestedOneWithoutProductToPublishersInput } from '../publisher/publisher-create-nested-one-without-product-to-publishers.input';

@InputType()
export class ProductToPublisherCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProductCreateNestedOneWithoutProductToPublishersInput, {nullable:false})
    @Type(() => ProductCreateNestedOneWithoutProductToPublishersInput)
    product!: ProductCreateNestedOneWithoutProductToPublishersInput;

    @Field(() => PublisherCreateNestedOneWithoutProductToPublishersInput, {nullable:false})
    publisher!: PublisherCreateNestedOneWithoutProductToPublishersInput;
}
