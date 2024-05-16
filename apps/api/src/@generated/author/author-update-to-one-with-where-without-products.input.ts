import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorWhereInput } from './author-where.input';
import { Type } from 'class-transformer';
import { AuthorUpdateWithoutProductsInput } from './author-update-without-products.input';

@InputType()
export class AuthorUpdateToOneWithWhereWithoutProductsInput {

    @Field(() => AuthorWhereInput, {nullable:true})
    @Type(() => AuthorWhereInput)
    where?: AuthorWhereInput;

    @Field(() => AuthorUpdateWithoutProductsInput, {nullable:false})
    @Type(() => AuthorUpdateWithoutProductsInput)
    data!: AuthorUpdateWithoutProductsInput;
}
