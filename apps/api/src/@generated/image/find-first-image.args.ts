import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ImageWhereInput } from './image-where.input';
import { Type } from 'class-transformer';
import { ImageOrderByWithRelationInput } from './image-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ImageWhereUniqueInput } from './image-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ImageScalarFieldEnum } from './image-scalar-field.enum';

@ArgsType()
export class FindFirstImageArgs {
  @Field(() => ImageWhereInput, { nullable: true })
  @Type(() => ImageWhereInput)
  where?: ImageWhereInput;

  @Field(() => [ImageOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<ImageOrderByWithRelationInput>;

  @Field(() => ImageWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<ImageWhereUniqueInput, 'id_productId'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [ImageScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof ImageScalarFieldEnum>;
}
