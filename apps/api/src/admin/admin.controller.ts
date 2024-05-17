import { Controller, Get, Param, Post, Render, Req } from '@nestjs/common';
import { RedirectAuth } from 'src/auth/decorator/redirectAuth.decorator';
import { AuthorsService } from 'src/authors/authors.service';
import { CategoriesService } from 'src/categories/categories.service';
import { CustomersService } from 'src/customers/customers.service';
import { FeedbacksService } from 'src/feedbacks/feedbacks.service';
import { OrdersService } from 'src/orders/orders.service';
import { ProductsService } from 'src/products/products.service';
import { PublishersService } from 'src/publishers/publishers.service';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(
    private readonly adminService: AdminService,
    private readonly authorsService: AuthorsService,
    private readonly categoriesService: CategoriesService,
    private readonly customersService: CustomersService,
    private readonly feedbacksService: FeedbacksService,
    private readonly productsService: ProductsService,
    private readonly ordersService: OrdersService,
    private readonly publishersService: PublishersService,
  ) {}

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
  async delete() {}

  @Post(':entity/:id/edit')
  @RedirectAuth()
  async editPost() {}

  @Get(':entity:id/edit')
  @RedirectAuth()
  @Render('create')
  async editPage(
    @Req() req,
    @Param('entity') entity: string,
    @Param('id') id: string,
  ) {}

  @Get(':entity/:id')
  @RedirectAuth()
  @Render('detail')
  async detailPage(
    @Req() req,
    @Param('entity') entity: string,
    @Param('id') id: string,
  ) {}

  @Post(':entity/create')
  @RedirectAuth()
  async createPost() {}

  @Get(':entity/create')
  @RedirectAuth()
  @Render('create')
  async createPage(@Req() req, @Param('entity') entity: string) {}
  /////
  @Get(':entity')
  @RedirectAuth()
  @Render('list')
  listPage(@Req() request, @Param('entity') entityName) {
    return this.adminService.listRes(request, entityName);
  }
}
