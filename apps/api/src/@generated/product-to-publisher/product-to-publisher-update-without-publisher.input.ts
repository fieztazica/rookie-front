import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUpdateOneRequiredWithoutProductToPublishersNestedInput } from '../product/product-update-one-required-without-product-to-publishers-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductToPublisherUpdateWithoutPublisherInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProductUpdateOneRequiredWithoutProductToPublishersNestedInput, {nullable:true})
    @Type(() => ProductUpdateOneRequiredWithoutProductToPublishersNestedInput)
    product?: ProductUpdateOneRequiredWithoutProductToPublishersNestedInput;
}
