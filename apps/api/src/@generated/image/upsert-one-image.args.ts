import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ImageWhereUniqueInput } from './image-where-unique.input';
import { Type } from 'class-transformer';
import { ImageCreateInput } from './image-create.input';
import { ImageUpdateInput } from './image-update.input';

@ArgsType()
export class UpsertOneImageArgs {
  @Field(() => ImageWhereUniqueInput, { nullable: false })
  @Type(() => ImageWhereUniqueInput)
  where!: Prisma.AtLeast<ImageWhereUniqueInput, 'id_productId'>;

  @Field(() => ImageCreateInput, { nullable: false })
  @Type(() => ImageCreateInput)
  create!: ImageCreateInput;

  @Field(() => ImageUpdateInput, { nullable: false })
  @Type(() => ImageUpdateInput)
  update!: ImageUpdateInput;
}
