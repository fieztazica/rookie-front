import {
  Resolver,
  Query,
  Mutation,
  Args,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { CategoriesService } from './categories.service';
import { Category, PaginatedCategory } from './entities/category.entity';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { PaginationArgs } from 'src/common/graphql/pagination.args';
import { FindManyCategoryArgs } from 'src/__generated__/category/find-many-category.args';
import { ProductToCategory } from 'src/__generated__/product-to-category/product-to-category.model';
import { PrismaService } from 'src/common/database/prisma.service';

@Resolver(() => Category)
export class CategoriesResolver {
  constructor(
    private readonly categoriesService: CategoriesService,
    private readonly prismaService: PrismaService,
  ) {}

  @Mutation(() => Category)
  createCategory(
    @Args('createCategoryInput') createCategoryInput: CreateCategoryInput,
  ): Promise<Category> {
    return this.categoriesService.create(createCategoryInput);
  }

  @Query(() => [Category], { name: 'categories' })
  async findAll(@Args({ nullable: true }) options?: FindManyCategoryArgs) {
    return this.categoriesService.findAll(options);
  }

  @Query(() => PaginatedCategory, { name: 'paginatedCategories' })
  async paginatedFindAll(@Args({ nullable: true }) options?: PaginationArgs) {
    return this.categoriesService.paginatedFindAll(options);
  }

  @Query(() => Category, { name: 'category' })
  findOne(@Args('id', { type: () => String }) id: string): Promise<Category> {
    return this.categoriesService.findOne(id);
  }

  @ResolveField('products', () => [ProductToCategory])
  getCategories(@Parent() category: Category) {
    const { id } = category;
    return this.prismaService.productToCategory.findMany({
      where: {
        categoryId: id,
      },
      include: {
        product: true,
      },
    });
  }

  @Mutation(() => Category)
  updateCategory(
    @Args('updateCategoryInput') updateCategoryInput: UpdateCategoryInput,
  ): Promise<Category> {
    return this.categoriesService.update(
      updateCategoryInput.id,
      updateCategoryInput,
    );
  }

  @Mutation(() => Category)
  removeCategory(
    @Args('id', { type: () => String }) id: string,
  ): Promise<Category> {
    return this.categoriesService.remove(id);
  }
}
