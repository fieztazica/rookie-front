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
import { RedirectAuth } from 'src/auth/decorator/redirectAuth.decorator';
import { RolesGuard } from 'src/auth/guard/roles.guard';
import { ProductsService } from 'src/products/products.service';
import { AdminService } from '../admin.service';
import { Request } from 'express';

@Controller('admin/products')
@UseGuards(RolesGuard)
export class AdminProductsController {
  constructor(
    private readonly productsService: ProductsService,
    private readonly adminService: AdminService,
  ) {}

  @Get()
  @RedirectAuth()
  @Render('list')
  listPage(
    @Req() req: Request,
    @Query('page') page: number = 1,
    @Query('perPage') perPage: number = 10,
    @Query('successMessage') successMessage: string,
  ) {
    return this.adminService.listRes(
      req,
      'products',
      page,
      perPage,
      successMessage,
    );
  }
}
