import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CartData } from './entities/cart.entity';
import { AddCartItemInput } from './dto/add-cart-item.input';
import { CartService } from './cart.service';

@Resolver()
export class CartResolver {
  constructor(private readonly cartService: CartService) {}

  @Query(() => CartData, { name: 'cart' })
  async getCart(@Args('userId', { type: () => String }) userId: string) {
    const cart = await this.cartService.get(userId);
    console.log(cart);
    return cart;
  }

  @Mutation(() => CartData)
  addCartItem(
    @Args('userId', { type: () => String }) userId: string,
    @Args('input') input: AddCartItemInput,
  ) {
    return this.cartService.add(userId, input.key, input.value);
  }
}
