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
import { Request } from 'express';
import { RedirectAuth } from 'src/auth/decorator/redirectAuth.decorator';
import { AdminService } from './admin.service';
import { DetailPage, EntityNames, MainLayoutRes } from './admin.type';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

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
    @Query('successMessage') successMessage?: string,
    @Query('errorMessage') errorMessage?: string,
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
      errorMessage: errorMessage ? decodeURIComponent(errorMessage) : '',
    };
  }

  @Post(':entity/create')
  @RedirectAuth()
  async createPost(
    @Req() req: Request,
    @Res() res,
    @Body() body,
    @Param('entity') entity: EntityNames,
  ) {
    return await this.adminService.createEntity(req, res, entity, body);
  }

  @Get('products/create')
  @RedirectAuth()
  @Render('product/create')
  async createProductPage(
    @Req() req,
    @Query('fields') errorFields?: string,
    @Query('errorMessage') errorMessage?: string,
  ) {
    return this.adminService.dynamicCreateForm(
      req,
      'products',
      errorFields,
      errorMessage,
    );
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
