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
import { CartService } from 'src/cart/cart.service';

@Injectable()
export class OrdersService {
  constructor(
    @Inject(ENHANCED_PRISMA) private readonly prisma: PrismaService,
    private readonly productsService: ProductsService,
    private readonly cartService: CartService,
  ) {}
  create(createOrderInput: CreateOrderInput) {
    return this.prisma.order.create({ data: createOrderInput });
  }

  async make(customerId: string, items: CartItemInput[]) {
    const cart = await this.cartService.getOrSetCart(customerId, items);

    const productIds = cart.items.map((item) => item.key);
    const foundProducts = await this.productsService.findAll({
      where: {
        id: {
          in: productIds,
        },
      },
    });

    const cartItemsMap = new Map(
      cart.items.map((item) => [item.key, item.value]),
    );
    const isSomeProductQuantityNotEnough = foundProducts.some(
      (product) => product.storeQuantity < cartItemsMap.get(product.id),
    );

    if (isSomeProductQuantityNotEnough) {
      throw new Error('Not enough products in stock');
    }

    const priceMap = new Map<string, number>(
      foundProducts.map((product) => [
        product.id,
        product.salePrice >= 0 ? product.salePrice : product.price,
      ]),
    );

    const orderTotal = cart.items.reduce((acc, item) => {
      const price = priceMap.get(item.key);
      if (!price) return acc;
      return acc + price * item.value;
    }, 0);

    const createdOrder = await this.prisma.order.create({
      data: {
        customerId,
        orderItems: {
          create: cart.items.map((item) => ({
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

    for await (const product of foundProducts) {
      await this.productsService.update(product.id, {
        id: product.id,
        storeQuantity: product.storeQuantity - cartItemsMap.get(product.id),
      });
    }

    await this.cartService.clear(customerId);

    return createdOrder;
  }

  findAll(
    options: Prisma.OrderFindManyArgs = {
      where: { deleted: { equals: false } },
    },
  ) {
    return this.prisma.order.findMany(options);
  }

  paginatedFindAll(
    paginationOptions: PaginateOptions = { page: 1, perPage: 10 },
    queryOptions: Prisma.OrderFindManyArgs = {},
  ): Promise<PaginatedResult<Order>> {
    const paginate = createPaginator(paginationOptions);
    return paginate<Order, Prisma.OrderFindManyArgs>(this.prisma.order, {
      ...queryOptions,
      where: { deleted: false },
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
