import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublisherUpdateOneRequiredWithoutProductsNestedInput } from '../publisher/publisher-update-one-required-without-products-nested.input';

@InputType()
export class ProductToPublisherUpdateWithoutProductInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => PublisherUpdateOneRequiredWithoutProductsNestedInput, {nullable:true})
    publisher?: PublisherUpdateOneRequiredWithoutProductsNestedInput;
}
