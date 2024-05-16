import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductToPublisherCreateManyInput } from './product-to-publisher-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyProductToPublisherArgs {
  @Field(() => [ProductToPublisherCreateManyInput], { nullable: false })
  @Type(() => ProductToPublisherCreateManyInput)
  data!: Array<ProductToPublisherCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
