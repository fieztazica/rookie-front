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
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
