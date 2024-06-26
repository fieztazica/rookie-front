import {
  Args,
  Float,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Feedback } from 'src/__generated__/feedback/feedback.model';
import { OrderItem } from 'src/__generated__/order-item/order-item.model';
import { ProductToAuthor } from 'src/__generated__/product-to-author/product-to-author.model';
import { ProductToCategory } from 'src/__generated__/product-to-category/product-to-category.model';
import { FindManyProductArgs } from 'src/__generated__/product/find-many-product.args';
import { UseGqlAuthRoles } from 'src/auth/decorator/authRoles.decorator';
import { Role } from 'src/auth/enum/role.enum';
import { PaginationArgs } from 'src/common/graphql/pagination.args';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { PaginatedProduct, Product } from './entities/product.entity';
import { ProductsService } from './products.service';

@Resolver(() => Product)
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Mutation(() => Product)
  @UseGqlAuthRoles(Role.Admin)
  createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput,
  ): Promise<Product> {
    return this.productsService.create(createProductInput);
  }

  @Query(() => [Product], { name: 'products' })
  async findAll(@Args({ nullable: true }) options?: FindManyProductArgs) {
    return this.productsService.findAll(options);
  }

  @Query(() => [Product], {
    name: 'getPopularProducts',
  })
  async getPopularProducts() {
    return this.productsService.getPopularProducts();
  }

  @Query(() => PaginatedProduct, { name: 'paginatedProducts' })
  async paginatedFindAll(@Args({ nullable: true }) options?: PaginationArgs) {
    return this.productsService.paginatedFindAll(options);
  }

  @Query(() => Product, { name: 'product' })
  findOne(@Args('id', { type: () => String }) id: string): Promise<Product> {
    return this.productsService.findOne(id);
  }

  @ResolveField('ratings', () => Float)
  async getRating(@Parent() product: Product) {
    return this.productsService.calculateRatingsByProductId(
      product.id,
      product,
    );
  }

  @ResolveField('authors', () => [ProductToAuthor])
  getAuthors(@Parent() product: Product) {
    const { id } = product;
    return this.productsService.getProductAuthors(id);
  }

  @ResolveField('categories', () => [ProductToCategory])
  getCategories(@Parent() product: Product) {
    const { id } = product;
    return this.productsService.getProductCategories(id);
  }

  @ResolveField('orders', () => [OrderItem])
  getOrders(@Parent() product: Product) {
    const { id } = product;
    return this.productsService.getProductOrderItems(id);
  }

  @ResolveField('feedbacks', () => [Feedback])
  getFeedbacks(@Parent() product: Product) {
    const { id } = product;
    return this.productsService.getProductFeedbacks(id);
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
