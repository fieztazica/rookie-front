import { Inject, Injectable } from '@nestjs/common';
import { FindManyOrderArgs, OrderPrisma } from '@repo/db';
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
  create(createOrderInput: CreateOrderInput): Promise<OrderPrisma> {
    return this.prisma.order.create({ data: createOrderInput });
  }

  findAll(
    options: PaginateOptions = {},
  ): Promise<PaginatedResult<OrderPrisma>> {
    const paginate = createPaginator(options);
    return paginate<OrderPrisma, FindManyOrderArgs>(this.prisma.order, {
      where: { deleted: { equals: false } },
    });
  }

  findOne(id: string): Promise<OrderPrisma> {
    return this.prisma.order.findUnique({ where: { id, deleted: false } });
  }

  update(id: string, updateOrderInput: UpdateOrderInput): Promise<OrderPrisma> {
    return this.prisma.order.update({
      where: { id, deleted: false },
      data: updateOrderInput,
    });
  }

  remove(id: string): Promise<OrderPrisma> {
    return this.prisma.order.update({
      where: { id, deleted: false },
      data: {
        deleted: true,
      },
    });
  }
}
