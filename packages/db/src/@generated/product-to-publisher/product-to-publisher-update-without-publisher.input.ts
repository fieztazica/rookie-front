import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUpdateOneRequiredWithoutPublishersNestedInput } from '../product/product-update-one-required-without-publishers-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductToPublisherUpdateWithoutPublisherInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProductUpdateOneRequiredWithoutPublishersNestedInput, {nullable:true})
    @Type(() => ProductUpdateOneRequiredWithoutPublishersNestedInput)
    product?: ProductUpdateOneRequiredWithoutPublishersNestedInput;
}
