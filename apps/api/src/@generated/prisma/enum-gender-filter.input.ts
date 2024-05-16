import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Gender } from './gender.enum';

@InputType()
export class EnumGenderFilter {

    @Field(() => Gender, {nullable:true})
    equals?: keyof typeof Gender;

    @Field(() => [Gender], {nullable:true})
    in?: Array<keyof typeof Gender>;

    @Field(() => [Gender], {nullable:true})
    notIn?: Array<keyof typeof Gender>;

    @Field(() => EnumGenderFilter, {nullable:true})
    not?: EnumGenderFilter;
}
