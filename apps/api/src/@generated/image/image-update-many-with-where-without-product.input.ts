import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageScalarWhereInput } from './image-scalar-where.input';
import { Type } from 'class-transformer';
import { ImageUpdateManyMutationInput } from './image-update-many-mutation.input';

@InputType()
export class ImageUpdateManyWithWhereWithoutProductInput {
  @Field(() => ImageScalarWhereInput, { nullable: false })
  @Type(() => ImageScalarWhereInput)
  where!: ImageScalarWhereInput;

  @Field(() => ImageUpdateManyMutationInput, { nullable: false })
  @Type(() => ImageUpdateManyMutationInput)
  data!: ImageUpdateManyMutationInput;
}
