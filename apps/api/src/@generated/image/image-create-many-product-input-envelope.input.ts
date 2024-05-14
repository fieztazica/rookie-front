import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageCreateManyProductInput } from './image-create-many-product.input';
import { Type } from 'class-transformer';

@InputType()
export class ImageCreateManyProductInputEnvelope {

    @Field(() => [ImageCreateManyProductInput], {nullable:false})
    @Type(() => ImageCreateManyProductInput)
    data!: Array<ImageCreateManyProductInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
