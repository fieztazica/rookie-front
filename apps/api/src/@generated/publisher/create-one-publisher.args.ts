import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PublisherCreateInput } from './publisher-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePublisherArgs {

    @Field(() => PublisherCreateInput, {nullable:false})
    @Type(() => PublisherCreateInput)
    data!: PublisherCreateInput;
}
