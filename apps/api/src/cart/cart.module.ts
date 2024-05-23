import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { ProductsModule } from 'src/products/products.module';
import { ProductsService } from 'src/products/products.service';
import { CartResolver } from './cart.resolver';
import { RedisModule } from 'src/redis/redis.module';

@Module({
  imports: [ProductsModule, RedisModule],
  providers: [CartService, ProductsService, CartResolver],
})
export class CartModule {}
