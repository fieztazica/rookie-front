import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageWhereInput } from './image-where.input';

@InputType()
export class ImageListRelationFilter {

    @Field(() => ImageWhereInput, {nullable:true})
    every?: ImageWhereInput;

    @Field(() => ImageWhereInput, {nullable:true})
    some?: ImageWhereInput;

    @Field(() => ImageWhereInput, {nullable:true})
    none?: ImageWhereInput;
}
