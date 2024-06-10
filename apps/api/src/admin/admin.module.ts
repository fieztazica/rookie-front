import { Module } from '@nestjs/common';
import { AuthorsModule } from 'src/authors/authors.module';
import { CategoriesModule } from 'src/categories/categories.module';
import { ConfigsModule } from 'src/configs/configs.module';
import { CustomersModule } from 'src/customers/customers.module';
import { FeedbacksModule } from 'src/feedbacks/feedbacks.module';
import { OrdersModule } from 'src/orders/orders.module';
import { ProductsModule } from 'src/products/products.module';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { AdminProductsController } from './products/admin.products.controller';
import { AdminOrdersController } from './orders/admin.orders.controller';
import { AdminOrdersService } from './orders/admin.orders.service';
import { AdminConfigsController } from './configs/admin.configs.controller';
import { AdminConfigsService } from './configs/admin.configs.service';

@Module({
  imports: [
    AuthorsModule,
    CustomersModule,
    FeedbacksModule,
    CategoriesModule,
    ProductsModule,
    OrdersModule,
    ConfigsModule,
  ],
  controllers: [
    AdminConfigsController,
    AdminProductsController,
    AdminOrdersController,
    AdminController,
  ],
  providers: [AdminService, AdminOrdersService, AdminConfigsService],
})
export class AdminModule {}
