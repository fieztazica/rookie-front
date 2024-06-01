import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Type } from '@nestjs/common';
import { PaginatedResult } from 'prisma-pagination';

export interface IPaginatedType<T> extends PaginatedResult<T> {}

export function Paginated<T>(classRef: Type<T>): Type<IPaginatedType<T>> {
  @ObjectType(`${classRef.name}Meta`)
  abstract class MetaType {
    @Field(() => Int)
    total: number;

    @Field(() => Int)
    lastPage: number;

    @Field(() => Int)
    currentPage: number;

    @Field(() => Int)
    perPage: number;

    @Field(() => Int, { nullable: true })
    prev: number;

    @Field(() => Int, { nullable: true })
    next: number;
  }

  @ObjectType({ isAbstract: true })
  abstract class PaginatedType implements IPaginatedType<T> {
    @Field(() => [classRef])
    data: T[];

    @Field(() => MetaType)
    meta: MetaType;
  }
  return PaginatedType as Type<IPaginatedType<T>>;
}
