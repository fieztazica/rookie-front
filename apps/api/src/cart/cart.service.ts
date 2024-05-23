import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { ProductsService } from 'src/products/products.service';
import { RedisService } from 'src/redis/redis.service';
import { CartData } from './entities/cart.entity';

@Injectable()
export class CartService {
  name = 'basket';
  constructor(
    private readonly redisService: RedisService,
    private readonly productsService: ProductsService,
  ) {}

  get(userId: string) {
    return this.redisService.hGetOrSetJson<CartData>(
      this.name,
      userId,
      new CartData(),
    );
  }

  async add(userId: string, productId: string, amount: number = 1) {
    const cartItems = await this.redisService.hGetOrSetJson<CartData>(
      this.name,
      userId,
      new CartData(),
    );
    cartItems.addItem(productId, amount);
    await this.redisService.hSetJson(this.name, userId, cartItems);
    return cartItems;
  }

  remove() {}

  delete() {}
}
