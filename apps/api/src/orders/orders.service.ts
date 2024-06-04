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
import { CartItemInput } from 'src/cart/dto/cart-item.input';
import { ProductsService } from 'src/products/products.service';

@Injectable()
export class OrdersService {
  constructor(
    @Inject(ENHANCED_PRISMA) private readonly prisma: PrismaService,
    private readonly productsService: ProductsService,
  ) {}
  create(createOrderInput: CreateOrderInput) {
    return this.prisma.order.create({ data: createOrderInput });
  }

  async make(customerId: string, items: CartItemInput[]) {
    const productIds = items.map((item) => item.key);
    const foundProducts = await this.productsService.findAll({
      where: {
        id: {
          in: productIds,
        },
      },
    });

    const priceMap = new Map<string, number>(
      foundProducts.map((product) => [
        product.id,
        product.salePrice >= 0 ? product.salePrice : product.price,
      ]),
    );

    const orderTotal = items.reduce((acc, item) => {
      const price = priceMap.get(item.key);
      if (!price) return acc;
      return acc + price * item.value;
    }, 0);

    return this.prisma.order.create({
      data: {
        customerId,
        orderItems: {
          create: items.map((item) => ({
            price: priceMap.get(item.key),
            quantity: item.value,
            product: {
              connect: {
                id: item.key,
              },
            },
          })),
        },
        total: orderTotal,
      },
    });
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

  getOrderItems(orderId: string) {
    return this.prisma.orderItem.findMany({
      where: {
        orderId,
      },
      include: {
        product: true,
      },
    });
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
