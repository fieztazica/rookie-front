import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateNestedOneWithoutPublishersInput } from '../product/product-create-nested-one-without-publishers.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductToPublisherCreateWithoutPublisherInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProductCreateNestedOneWithoutPublishersInput, {nullable:false})
    @Type(() => ProductCreateNestedOneWithoutPublishersInput)
    product!: ProductCreateNestedOneWithoutPublishersInput;
}
