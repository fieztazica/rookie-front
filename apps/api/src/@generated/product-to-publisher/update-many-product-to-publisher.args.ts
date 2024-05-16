import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductToPublisherUpdateManyMutationInput } from './product-to-publisher-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ProductToPublisherWhereInput } from './product-to-publisher-where.input';

@ArgsType()
export class UpdateManyProductToPublisherArgs {
  @Field(() => ProductToPublisherUpdateManyMutationInput, { nullable: false })
  @Type(() => ProductToPublisherUpdateManyMutationInput)
  data!: ProductToPublisherUpdateManyMutationInput;

  @Field(() => ProductToPublisherWhereInput, { nullable: true })
  @Type(() => ProductToPublisherWhereInput)
  where?: ProductToPublisherWhereInput;
}
