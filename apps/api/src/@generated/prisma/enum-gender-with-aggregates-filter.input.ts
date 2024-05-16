import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Gender } from './gender.enum';
import { IntFilter } from './int-filter.input';
import { EnumGenderFilter } from './enum-gender-filter.input';

@InputType()
export class EnumGenderWithAggregatesFilter {
  @Field(() => Gender, { nullable: true })
  equals?: keyof typeof Gender;

  @Field(() => [Gender], { nullable: true })
  in?: Array<keyof typeof Gender>;

  @Field(() => [Gender], { nullable: true })
  notIn?: Array<keyof typeof Gender>;

  @Field(() => EnumGenderWithAggregatesFilter, { nullable: true })
  not?: EnumGenderWithAggregatesFilter;

  @Field(() => IntFilter, { nullable: true })
  _count?: IntFilter;

  @Field(() => EnumGenderFilter, { nullable: true })
  _min?: EnumGenderFilter;

  @Field(() => EnumGenderFilter, { nullable: true })
  _max?: EnumGenderFilter;
}
