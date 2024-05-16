import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Gender } from './gender.enum';
import { NestedEnumGenderNullableFilter } from './nested-enum-gender-nullable-filter.input';

@InputType()
export class EnumGenderNullableFilter {
  @Field(() => Gender, { nullable: true })
  equals?: keyof typeof Gender;

  @Field(() => [Gender], { nullable: true })
  in?: Array<keyof typeof Gender>;

  @Field(() => [Gender], { nullable: true })
  notIn?: Array<keyof typeof Gender>;

  @Field(() => NestedEnumGenderNullableFilter, { nullable: true })
  not?: NestedEnumGenderNullableFilter;
}
