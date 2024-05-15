import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublisherUpdateOneRequiredWithoutProductToPublishersNestedInput } from '../publisher/publisher-update-one-required-without-product-to-publishers-nested.input';

@InputType()
export class ProductToPublisherUpdateWithoutProductInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => PublisherUpdateOneRequiredWithoutProductToPublishersNestedInput, {nullable:true})
    publisher?: PublisherUpdateOneRequiredWithoutProductToPublishersNestedInput;
}
