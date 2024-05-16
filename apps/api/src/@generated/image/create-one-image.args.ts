import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ImageCreateInput } from './image-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneImageArgs {

    @Field(() => ImageCreateInput, {nullable:false})
    @Type(() => ImageCreateInput)
    data!: ImageCreateInput;
}
