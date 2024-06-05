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
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { RedirectAuth } from 'src/auth/decorator/redirectAuth.decorator';
import { RolesGuard } from 'src/auth/guard/roles.guard';
import { AdminService } from './admin.service';
import { DetailPage, EntityNames, MainLayoutRes } from './admin.type';
import { OrderStatus } from '@prisma/client';

@Controller('admin')
@UseGuards(RolesGuard)
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('configs/about/edit')
  @RedirectAuth()
  async postAboutPage(@Req() req, @Res() res, @Body() body: { about: string }) {
    await this.adminService.setAbout(body.about);
    res.redirect('/admin/configs/about/edit?successMessage=Saved');
  }

  @Get('configs/about/edit')
  @RedirectAuth()
  @Render('about/edit')
  async editAboutPage(
    @Req() req,
    @Query('successMessage') successMessage: string,
  ) {
    return {
      successMessage: successMessage ? decodeURIComponent(successMessage) : '',
      userinfo: req?.user?.userinfo,
      data: await this.adminService.getAbout(),
    };
  }

  @Post('orders/:orderId/status')
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
    const { status } = await this.adminService.updateOrderStatus(orderId, data);
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

  @Get('orders')
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
  ) {
    return this.adminService.orderListRes(
      req,
      page,
      perPage,
      successMessage,
      sort,
      order,
      orderId,
    );
  }

  @Get()
  @Render('home')
  home(@Req() req) {
    return {
      message: req?.user?.userinfo
        ? `Have a nice day, ${req?.user?.userinfo?.name}!`
        : 'Please login to access the admin dashboard.',
      userinfo: req?.user?.userinfo,
    };
  }

  @Post(':entity/:id/delete')
  @RedirectAuth()
  async delete(
    @Req() req: Request,
    @Res() res,
    @Param('entity') entity: EntityNames,
    @Param('id') entityId: string,
    @Query('from') from: string,
  ) {
    return this.adminService.deleteEntity(req, res, entity, entityId, from);
  }

  @Get(':entity/:id/delete')
  @RedirectAuth()
  @Render('deleteConfirm')
  async deleteConfirm(
    @Req() req: Request,
    @Res() res,
    @Param('entity') entity: EntityNames,
    @Param('id') entityId: string,
    @Query('from') from: string,
  ) {
    if (!from || from == 'list') from = '';
    return {
      resourceName: entity,
      entityId,
      from,
      userinfo: req?.user?.userinfo,
    };
  }

  @Post(':entity/:id/edit')
  @RedirectAuth()
  async editPost(
    @Req() req: Request,
    @Res() res,
    @Body() body,
    @Param('entity') entity: EntityNames,
    @Param('id') id: string,
  ) {
    return this.adminService.editEntity(req, res, body, entity, id);
  }

  @Get(':entity/:id/edit')
  @RedirectAuth()
  @Render('edit')
  async editPage(
    @Req() req: Request,
    @Param('entity') entity: EntityNames,
    @Param('id') id: string,
    @Query('successMessage') successMessage: string,
  ): Promise<DetailPage | MainLayoutRes> {
    const data = await this.adminService.getEntityDetails(req, entity, id);
    if (!data) {
      return {
        userinfo: req?.user?.userinfo,
        errorMessage: 'Failed to fetch record',
      };
    }
    return {
      entityId: id,
      data,
      resourceName: entity,
      userinfo: req?.user?.userinfo,
      successMessage: successMessage ? decodeURIComponent(successMessage) : '',
    };
  }

  @Post(':entity/create')
  @RedirectAuth()
  @Render('create')
  async createPost(
    @Req() req: Request,
    @Res() res,
    @Body() body,
    @Param('entity') entity: EntityNames,
  ) {
    return await this.adminService.createEntity(req, res, entity, body);
  }

  @Get(':entity/create')
  @RedirectAuth()
  @Render('create')
  async createPage(@Req() req, @Param('entity') entity: EntityNames) {
    return this.adminService.dynamicCreateForm(req, entity);
  }

  @Get(':entity/:id')
  @RedirectAuth()
  @Render('detail')
  async detailPage(
    @Req() req: Request,
    @Param('entity') entity: EntityNames,
    @Param('id') id: string,
    @Query('successMessage') successMessage: string,
  ): Promise<DetailPage | MainLayoutRes> {
    const data = await this.adminService.getEntityDetails(req, entity, id);
    if (!data) {
      return {
        userinfo: req?.user?.userinfo,
        errorMessage: 'Failed to fetch record',
      };
    }
    return {
      userinfo: req?.user?.userinfo,
      resourceName: entity,
      entityId: id,
      data,
      successMessage: successMessage ? decodeURIComponent(successMessage) : '',
    };
  }

  @Get(':entity')
  @RedirectAuth()
  @Render('list')
  listPage(
    @Req() req: Request,
    @Param('entity') entityName: EntityNames,
    @Query('page') page: number = 1,
    @Query('perPage') perPage: number = 10,
    @Query('successMessage') successMessage: string,
  ) {
    return this.adminService.listRes(
      req,
      entityName,
      page,
      perPage,
      successMessage,
    );
  }
}
