import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductToAuthorCreateManyInput } from './product-to-author-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyProductToAuthorArgs {

    @Field(() => [ProductToAuthorCreateManyInput], {nullable:false})
    @Type(() => ProductToAuthorCreateManyInput)
    data!: Array<ProductToAuthorCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
