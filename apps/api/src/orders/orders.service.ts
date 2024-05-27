import { Inject, Injectable } from '@nestjs/common';
import { Order, Prisma } from '@prisma/client';
import { ENHANCED_PRISMA } from '@zenstackhq/server/nestjs';
import {
  createPaginator,
  PaginatedResult,
  PaginateOptions,
} from 'prisma-pagination';
import { PrismaService } from '../common/database/prisma.service';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';

@Injectable()
export class OrdersService {
  constructor(
    @Inject(ENHANCED_PRISMA) private readonly prisma: PrismaService,
  ) {}
  create(createOrderInput: CreateOrderInput): Promise<Order> {
    return this.prisma.order.create({ data: createOrderInput });
  }

  findAll(
    options: Prisma.OrderFindManyArgs = {
      where: { deleted: { equals: false } },
    },
  ) {
    return this.prisma.order.findMany(options);
  }

  paginatedFindAll(
    options: PaginateOptions = { page: 1, perPage: 10 },
  ): Promise<PaginatedResult<Order>> {
    const paginate = createPaginator(options);
    return paginate<Order, Prisma.OrderFindManyArgs>(this.prisma.order, {
      where: { deleted: { equals: false } },
    });
  }

  findOne(id: string): Promise<Order> {
    return this.prisma.order.findUnique({ where: { id, deleted: false } });
  }

  update(id: string, updateOrderInput: UpdateOrderInput): Promise<Order> {
    return this.prisma.order.update({
      where: { id, deleted: false },
      data: updateOrderInput,
    });
  }

  remove(id: string): Promise<Order> {
    return this.prisma.order.update({
      where: { id, deleted: false },
      data: {
        deleted: true,
      },
    });
  }
}
