import { Injectable } from '@nestjs/common';
import { AdminService } from '../admin.service';
import { OrdersService } from 'src/orders/orders.service';
import { OrderStatus } from '@prisma/client';

@Injectable()
export class AdminOrdersService {
  constructor(
    private readonly ordersService: OrdersService,
    private readonly adminService: AdminService,
  ) {}

  async updateOrderStatus(orderId: string, status: keyof typeof OrderStatus) {
    return await this.ordersService.update(orderId, {
      id: orderId,
      status: OrderStatus[status],
    });
  }

  async getOrders({
    page = 1,
    perPage = 10,
    order = 'desc',
    sort = 'createdAt',
  }: {
    page: number;
    perPage: number;
    order: 'desc' | 'asc';
    sort: string;
  }) {
    const paginatedRes = await this.ordersService.paginatedFindAll(
      {
        page,
        perPage,
      },
      {
        orderBy: {
          [sort]: order,
        },
      },
    );
    const data = paginatedRes.data.map((record) => {
      return this.adminService.filterFieldsFromEntity(
        this.adminService.beautifyEntity(record),
        ['id', 'total', 'status', 'createdAt'],
      );
    });
    return { data, meta: paginatedRes.meta };
  }
}
