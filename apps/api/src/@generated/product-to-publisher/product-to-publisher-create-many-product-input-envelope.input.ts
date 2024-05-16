import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductToPublisherCreateManyProductInput } from './product-to-publisher-create-many-product.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductToPublisherCreateManyProductInputEnvelope {

    @Field(() => [ProductToPublisherCreateManyProductInput], {nullable:false})
    @Type(() => ProductToPublisherCreateManyProductInput)
    data!: Array<ProductToPublisherCreateManyProductInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
