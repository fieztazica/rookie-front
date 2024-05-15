import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublisherCreateNestedOneWithoutProductToPublishersInput } from '../publisher/publisher-create-nested-one-without-product-to-publishers.input';

@InputType()
export class ProductToPublisherCreateWithoutProductInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => PublisherCreateNestedOneWithoutProductToPublishersInput, {nullable:false})
    publisher!: PublisherCreateNestedOneWithoutProductToPublishersInput;
}
