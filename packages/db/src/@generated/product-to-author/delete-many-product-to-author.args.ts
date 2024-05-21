import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductToAuthorWhereInput } from './product-to-author-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyProductToAuthorArgs {

    @Field(() => ProductToAuthorWhereInput, {nullable:true})
    @Type(() => ProductToAuthorWhereInput)
    where?: ProductToAuthorWhereInput;
}
