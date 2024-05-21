import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductToPublisherWhereInput } from './product-to-publisher-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyProductToPublisherArgs {

    @Field(() => ProductToPublisherWhereInput, {nullable:true})
    @Type(() => ProductToPublisherWhereInput)
    where?: ProductToPublisherWhereInput;
}
