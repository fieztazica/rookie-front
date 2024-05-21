import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PublisherCreateManyInput } from './publisher-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPublisherArgs {

    @Field(() => [PublisherCreateManyInput], {nullable:false})
    @Type(() => PublisherCreateManyInput)
    data!: Array<PublisherCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
