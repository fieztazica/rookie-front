import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { AuthorsService } from 'src/authors/authors.service';
import { CategoriesService } from 'src/categories/categories.service';
import { CustomersService } from 'src/customers/customers.service';
import { FeedbacksService } from 'src/feedbacks/feedbacks.service';
import { ProductsService } from 'src/products/products.service';
import { OrdersService } from 'src/orders/orders.service';
import { PublishersService } from 'src/publishers/publishers.service';
import { AuthorsModule } from 'src/authors/authors.module';
import { PublishersModule } from 'src/publishers/publishers.module';
import { CustomersModule } from 'src/customers/customers.module';
import { CategoriesModule } from 'src/categories/categories.module';
import { FeedbacksModule } from 'src/feedbacks/feedbacks.module';
import { ProductsModule } from 'src/products/products.module';
import { OrdersModule } from 'src/orders/orders.module';

@Module({
  imports: [
    AuthorsModule,
    PublishersModule,
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
    PublishersService,
  ],
})
export class AdminModule {}
