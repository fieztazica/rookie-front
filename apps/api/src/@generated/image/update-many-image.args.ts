import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ImageUpdateManyMutationInput } from './image-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ImageWhereInput } from './image-where.input';

@ArgsType()
export class UpdateManyImageArgs {
  @Field(() => ImageUpdateManyMutationInput, { nullable: false })
  @Type(() => ImageUpdateManyMutationInput)
  data!: ImageUpdateManyMutationInput;

  @Field(() => ImageWhereInput, { nullable: true })
  @Type(() => ImageWhereInput)
  where?: ImageWhereInput;
}
