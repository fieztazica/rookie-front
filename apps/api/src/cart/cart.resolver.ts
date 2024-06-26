import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Product } from 'src/__generated__/product/product.model';
import { ProductsService } from 'src/products/products.service';
import { CartService } from './cart.service';
import { CartItemInput } from './dto/cart-item.input';
import { Cart } from './entities/cart.entity';

@Resolver(() => Cart)
export class CartResolver {
  constructor(
    private readonly cartService: CartService,
    private readonly productsService: ProductsService,
  ) {}

  @Query(() => Int, { name: 'countCartItems' })
  async countCart(
    @Args('customerId', { type: () => String }) customerId: string,
  ) {
    const cart = await this.cartService.get(customerId);
    return cart.items.length;
  }

  @Query(() => Cart, { name: 'cart' })
  async getCart(
    @Args('customerId', { type: () => String }) customerId: string,
  ) {
    const cart = await this.cartService.get(customerId);
    return cart;
  }

  @ResolveField('products', () => [Product])
  async getProducts(@Parent() cart: Cart) {
    const { items } = cart;
    const itemsIds = items.map((item) => item.key);

    return this.productsService.findAll({
      where: {
        id: {
          in: itemsIds,
        },
      },
    });
  }

  @Mutation(() => Cart)
  addCartItem(
    @Args('customerId', { type: () => String }) customerId: string,
    @Args('input') input: CartItemInput,
  ) {
    return this.cartService.add(customerId, input.key, input.value);
  }

  @Mutation(() => Cart)
  updateCart(
    @Args('customerId', { type: () => String }) customerId: string,
    @Args('items', { type: () => [CartItemInput] }) items: CartItemInput[],
  ) {
    return this.cartService.update(customerId, items);
  }

  @Mutation(() => Cart)
  removeCartItem(
    @Args('customerId', { type: () => String }) customerId: string,
    @Args('input') input: CartItemInput,
  ) {
    return this.cartService.remove(customerId, input.key, input.value);
  }

  @Mutation(() => Cart)
  deleteCartItem(
    @Args('customerId', { type: () => String }) customerId: string,
    @Args('key', { type: () => String }) key: string,
  ) {
    return this.cartService.delete(customerId, key);
  }

  @Mutation(() => Boolean)
  async clearCart(
    @Args('customerId', { type: () => String }) customerId: string,
  ) {
    try {
      await this.cartService.clear(customerId);
    } catch (e) {
      console.log(e);
      return false;
    }
    return true;
  }
}
