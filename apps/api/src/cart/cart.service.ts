import { BadRequestException, Injectable } from '@nestjs/common';
import { CustomersService } from 'src/customers/customers.service';
import { ProductsService } from 'src/products/products.service';
import { RedisService } from 'src/redis/redis.service';
import { Cart } from './entities/cart.entity';
import { CartItemInput } from './dto/cart-item.input';

@Injectable()
export class CartService {
  name = 'basket';
  // 7 days in milliseconds
  ttl = 7 * 24 * 60 * 60 * 1000;
  constructor(
    private readonly redisService: RedisService,
    private readonly productsService: ProductsService,
    private readonly customersService: CustomersService,
  ) {}

  async get(customerId: string) {
    return this.getOrSetCart(customerId);
  }

  async add(customerId: string, productId: string, amount: number = 1) {
    let cart = await this.getOrSetCart(customerId);
    if (amount < 1) return cart;
    const product = await this.getProduct(productId);
    if (!cart.addItem) cart = new Cart(cart.items);
    cart.addItem(product.id, amount);
    await this.setCart(customerId, cart);
    return cart;
  }

  async update(customerId: string, items: CartItemInput[]) {
    return this.setCart(customerId, new Cart(items));
  }

  async remove(customerId: string, key: string, amount: number = 1) {
    let cart = await this.getOrSetCart(customerId);
    if (amount < 1) return cart;
    if (!cart.removeItem) cart = new Cart(cart.items);
    cart.removeItem(key, amount);
    await this.setCart(customerId, cart);
    return cart;
  }

  async delete(customerId: string, key: string) {
    let cart = await this.getOrSetCart(customerId);
    if (!cart.deleteItem) cart = new Cart(cart.items);
    cart.deleteItem(key);
    await this.setCart(customerId, cart);
    return cart;
  }

  clear(customerId: string) {
    return this.redisService.hSetJson(this.name, customerId, new Cart());
  }

  async verifyCustomerId(id: string) {
    const customer = await this.customersService.findOne(id);
    if (!customer) throw new BadRequestException();
    return customer.id;
  }

  async getOrSetCart(
    customerId: string,
    items?: { key: string; value: number }[],
  ) {
    customerId = await this.verifyCustomerId(customerId);
    const cart = items ? new Cart(items) : new Cart();
    return this.redisService.hGetOrSetJson<Cart>(
      this.name,
      customerId,
      cart,
      this.ttl,
    );
  }

  async setCart(customerId: string, cart: Cart) {
    customerId = await this.verifyCustomerId(customerId);
    this.redisService.hSetJson(this.name, customerId, cart, this.ttl);
    return cart;
  }

  async getProduct(productId: string) {
    return this.redisService.hGetOrSetJson(
      'products',
      productId,
      await this.productsService.findOne(productId),
      this.ttl,
    );
  }
}
