import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PaginationArgs } from 'src/common/graphql/pagination.args';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { PaginatedProduct, Product } from './entities/product.entity';
import { ProductsService } from './products.service';
@Resolver(() => Product)
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Mutation(() => Product)
  createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput,
  ): Promise<Product> {
    return this.productsService.create(createProductInput);
  }

  @Query(() => PaginatedProduct, { name: 'products' })
  async findAll(@Args() options: PaginationArgs) {
    return this.productsService.findAll(options);
  }

  @Query(() => Product, { name: 'product' })
  findOne(@Args('id', { type: () => String }) id: string): Promise<Product> {
    return this.productsService.findOne(id);
  }

  @Mutation(() => Product)
  updateProduct(
    @Args('updateProductInput') updateProductInput: UpdateProductInput,
  ): Promise<Product> {
    return this.productsService.update(
      updateProductInput.id,
      updateProductInput,
    );
  }

  @Mutation(() => Product)
  removeProduct(
    @Args('id', { type: () => String }) id: string,
  ): Promise<Product> {
    return this.productsService.remove(id);
  }
}
