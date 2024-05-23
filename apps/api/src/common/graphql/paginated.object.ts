import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Type } from '@nestjs/common';
import { PaginatedResult } from 'prisma-pagination';

export interface IPaginatedType<T> extends PaginatedResult<T> {}

export function Paginated<T>(classRef: Type<T>): Type<IPaginatedType<T>> {
  @ObjectType(`${classRef.name}Meta`)
  abstract class MetaType {
    @Field((type) => Int)
    total: number;

    @Field((type) => Int)
    lastPage: number;

    @Field((type) => Int)
    currentPage: number;

    @Field((type) => Int)
    perPage: number;

    @Field((type) => Int, { nullable: true })
    prev: number;

    @Field((type) => Int, { nullable: true })
    next: number;
  }

  @ObjectType({ isAbstract: true })
  abstract class PaginatedType implements IPaginatedType<T> {
    @Field((type) => [classRef])
    data: T[];

    @Field((type) => MetaType)
    meta: MetaType;
  }
  return PaginatedType as Type<IPaginatedType<T>>;
}
