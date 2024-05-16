import { Inject, Injectable } from '@nestjs/common';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
import { ENHANCED_PRISMA } from '@zenstackhq/server/nestjs';
import { PrismaService } from '../common/database/prisma.service';

@Injectable()
export class OrdersService {
  constructor(
    @Inject(ENHANCED_PRISMA) private readonly prisma: PrismaService,
  ) {}
  create(createOrderInput: CreateOrderInput) {
    return this.prisma.order.create({ data: createOrderInput });
  }

  findAll() {
    return this.prisma.order.findMany({ where: { deleted: false } });
  }

  findOne(id: string) {
    return this.prisma.order.findUnique({ where: { id, deleted: false } });
  }

  update(id: string, updateOrderInput: UpdateOrderInput) {
    return this.prisma.order.update({
      where: { id, deleted: false },
      data: updateOrderInput,
    });
  }

  remove(id: string) {
    return this.prisma.order.update({
      where: { id, deleted: false },
      data: {
        deleted: true,
      },
    });
  }
}
