import { Module } from '@nestjs/common';
import { ProductsModule } from 'src/products/products.module';
import { RedisModule } from 'src/redis/redis.module';
import { CartResolver } from './cart.resolver';
import { CartService } from './cart.service';

@Module({
  imports: [ProductsModule, RedisModule],
  providers: [CartService, CartResolver],
  exports: [CartService],
})
export class CartModule {}
