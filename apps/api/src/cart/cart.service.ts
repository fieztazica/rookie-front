import { Injectable } from '@nestjs/common';
import { ProductsService } from 'src/products/products.service';
import { RedisService } from 'src/redis/redis.service';
import { Cart } from './entities/cart.entity';

@Injectable()
export class CartService {
  name = 'basket';
  constructor(
    private readonly redisService: RedisService,
    private readonly productsService: ProductsService,
  ) {}

  get(customerId: string) {
    return this.redisService.hGetOrSetJson<Cart>(
      this.name,
      customerId,
      new Cart(),
    );
  }

  async add(customerId: string, productId: string, amount: number = 1) {
    let cart = await this.redisService.hGetOrSetJson<Cart>(
      this.name,
      customerId,
      new Cart(),
    );
    if (amount < 1) return cart;
    if (!cart.addItem) cart = new Cart(cart.items);
    cart.addItem(productId, amount);
    await this.redisService.hSetJson(this.name, customerId, cart);
    return cart;
  }

  async remove(customerId: string, key: string, amount: number = 1) {
    let cart = await this.redisService.hGetOrSetJson<Cart>(
      this.name,
      customerId,
      new Cart(),
    );
    if (amount < 1) return cart;
    if (!cart.removeItem) cart = new Cart(cart.items);
    cart.removeItem(key, amount);
    this.redisService.hSetJson(this.name, customerId, cart);
    return cart;
  }

  async delete(customerId: string, key: string) {
    let cart = await this.redisService.hGetOrSetJson<Cart>(
      this.name,
      customerId,
      new Cart(),
    );
    if (!cart.deleteItem) cart = new Cart(cart.items);
    cart.deleteItem(key);
    this.redisService.hSetJson(this.name, customerId, cart);
    return cart;
  }

  clear(customerId: string) {
    return this.redisService.hDel(this.name, customerId);
  }
}