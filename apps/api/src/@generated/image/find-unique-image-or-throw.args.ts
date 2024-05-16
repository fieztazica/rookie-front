import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ImageWhereUniqueInput } from './image-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueImageOrThrowArgs {
  @Field(() => ImageWhereUniqueInput, { nullable: false })
  @Type(() => ImageWhereUniqueInput)
  where!: Prisma.AtLeast<ImageWhereUniqueInput, 'id_productId'>;
}
