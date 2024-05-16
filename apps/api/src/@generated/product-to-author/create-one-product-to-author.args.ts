import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductToAuthorCreateInput } from './product-to-author-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneProductToAuthorArgs {

    @Field(() => ProductToAuthorCreateInput, {nullable:false})
    @Type(() => ProductToAuthorCreateInput)
    data!: ProductToAuthorCreateInput;
}
