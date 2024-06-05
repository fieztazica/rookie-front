import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersResolver } from './orders.resolver';
import { ProductsModule } from 'src/products/products.module';
import { CartModule } from 'src/cart/cart.module';

@Module({
  imports: [ProductsModule, CartModule],
  providers: [OrdersResolver, OrdersService],
  exports: [OrdersService],
})
export class OrdersModule {}
