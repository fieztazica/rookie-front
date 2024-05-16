import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductToAuthorCreateManyAuthorInput } from './product-to-author-create-many-author.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductToAuthorCreateManyAuthorInputEnvelope {

    @Field(() => [ProductToAuthorCreateManyAuthorInput], {nullable:false})
    @Type(() => ProductToAuthorCreateManyAuthorInput)
    data!: Array<ProductToAuthorCreateManyAuthorInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
