import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductToPublisherCreateInput } from './product-to-publisher-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneProductToPublisherArgs {

    @Field(() => ProductToPublisherCreateInput, {nullable:false})
    @Type(() => ProductToPublisherCreateInput)
    data!: ProductToPublisherCreateInput;
}
