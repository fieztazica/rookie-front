import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Render,
  Req,
  Res,
} from '@nestjs/common';
import { RedirectAuth } from 'src/auth/decorator/redirectAuth.decorator';
import { OrdersService } from 'src/orders/orders.service';
import { ListViewRes, MainLayoutRes } from '../admin.type';
import { AdminService } from '../admin.service';
import { Request } from 'express';
import { OrderStatus } from '@prisma/client';
import { AdminOrdersService } from './admin.orders.service';

@Controller('admin/orders')
export class AdminOrdersController {
  constructor(
    private readonly ordersService: OrdersService,
    private readonly adminService: AdminService,
    private readonly adminOrdersService: AdminOrdersService,
  ) {}

  @Post(':orderId/status')
  @RedirectAuth()
  async postOrderStatus(
    @Req() req,
    @Res() res,
    @Param('orderId') orderId: string,
    @Query('data') data: keyof typeof OrderStatus,
    @Query('page') page: number = 1,
    @Query('perPage') perPage: number = 10,
    @Query('order') order: 'desc' | 'asc' = 'desc',
    @Query('sort') sort: string = 'createdAt',
  ) {
    const { status } = await this.adminOrdersService.updateOrderStatus(
      orderId,
      data,
    );
    const successMessage = encodeURIComponent(
      `Updated order status! - ${status}`,
    );
    const searchParams = new URLSearchParams({
      orderId,
      successMessage,
      page: page.toString(),
      perPage: perPage.toString(),
      order,
      sort,
    });
    res.redirect(`/admin/orders?${searchParams.toString()}`);
  }

  @Get()
  @RedirectAuth()
  @Render('order/list')
  async listOrdersPage(
    @Req() req: Request,
    @Query('page') page: number = 1,
    @Query('perPage') perPage: number = 10,
    @Query('successMessage') successMessage: string,
    @Query('order') order: 'desc' | 'asc' = 'desc',
    @Query('sort') sort: string = 'createdAt',
    @Query('orderId') orderId?: string,
  ): Promise<ListViewRes | MainLayoutRes> {
    try {
      const { data, meta } = await this.adminOrdersService.getOrders({
        page,
        perPage,
        sort,
        order,
      });

      const searchParams = new URLSearchParams({
        page: page.toString(),
        perPage: perPage.toString(),
        sort,
        order,
      });

      return {
        heading: 'Orders',
        resourceName: 'orders',
        uniqueKeys: this.adminService.getUniqueKeys(data),
        data,
        meta,
        userinfo: req.user?.userinfo,
        successMessage: successMessage
          ? decodeURIComponent(successMessage)
          : '',
        order,
        sort,
        orderId,
        orderItems: orderId
          ? await this.ordersService.getOrderItems(orderId)
          : [],
        searchParams: searchParams.toString(),
      };
    } catch (error) {
      const errorMessage = `Failed to fetch orders records: ${error.message}`;
      console.error(`${errorMessage}:`, error);
      return {
        errorMessage,
        userinfo: req.user?.userinfo,
        resourceName: 'orders',
      };
    }
  }
}
