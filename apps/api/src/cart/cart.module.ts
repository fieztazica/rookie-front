import { Module } from '@nestjs/common';
import { ProductsModule } from 'src/products/products.module';
import { CustomersModule } from 'src/customers/customers.module';
import { RedisModule } from 'src/redis/redis.module';
import { CartResolver } from './cart.resolver';
import { CartService } from './cart.service';

@Module({
  imports: [CustomersModule, ProductsModule, RedisModule],
  providers: [CartService, CartResolver],
  exports: [CartService],
})
export class CartModule {}
