import { Module } from '@nestjs/common';
import { AuthorsModule } from 'src/authors/authors.module';
import { AuthorsService } from 'src/authors/authors.service';
import { CategoriesModule } from 'src/categories/categories.module';
import { CategoriesService } from 'src/categories/categories.service';
import { CustomersModule } from 'src/customers/customers.module';
import { CustomersService } from 'src/customers/customers.service';
import { FeedbacksModule } from 'src/feedbacks/feedbacks.module';
import { FeedbacksService } from 'src/feedbacks/feedbacks.service';
import { OrdersModule } from 'src/orders/orders.module';
import { OrdersService } from 'src/orders/orders.service';
import { ProductsModule } from 'src/products/products.module';
import { ProductsService } from 'src/products/products.service';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';

@Module({
  imports: [
    AuthorsModule,
    CustomersModule,
    FeedbacksModule,
    CategoriesModule,
    ProductsModule,
    OrdersModule,
  ],
  controllers: [AdminController],
  providers: [
    AdminService,
    AuthorsService,
    CategoriesService,
    CustomersService,
    FeedbacksService,
    OrdersService,
    ProductsService,
  ],
})
export class AdminModule {}
