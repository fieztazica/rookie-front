import { Inject, Injectable } from '@nestjs/common';
import { ENHANCED_PRISMA } from '@zenstackhq/server/nestjs';
import {
  createPaginator,
  PaginatedResult,
  PaginateOptions,
} from 'prisma-pagination';
import { PrismaService } from '../common/database/prisma.service';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
import { Order } from '@prisma/client';
import { FindManyOrderArgs } from 'src/__generated__/order/find-many-order.args';

@Injectable()
export class OrdersService {
  constructor(
    @Inject(ENHANCED_PRISMA) private readonly prisma: PrismaService,
  ) {}
  create(createOrderInput: CreateOrderInput): Promise<Order> {
    return this.prisma.order.create({ data: createOrderInput });
  }

  findAll(options: PaginateOptions = {}): Promise<PaginatedResult<Order>> {
    const paginate = createPaginator(options);
    return paginate<Order, FindManyOrderArgs>(this.prisma.order, {
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
