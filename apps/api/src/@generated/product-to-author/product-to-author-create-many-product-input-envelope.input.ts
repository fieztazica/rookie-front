import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductToAuthorCreateManyProductInput } from './product-to-author-create-many-product.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductToAuthorCreateManyProductInputEnvelope {

    @Field(() => [ProductToAuthorCreateManyProductInput], {nullable:false})
    @Type(() => ProductToAuthorCreateManyProductInput)
    data!: Array<ProductToAuthorCreateManyProductInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
