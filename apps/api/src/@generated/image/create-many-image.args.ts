import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ImageCreateManyInput } from './image-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyImageArgs {

    @Field(() => [ImageCreateManyInput], {nullable:false})
    @Type(() => ImageCreateManyInput)
    data!: Array<ImageCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
