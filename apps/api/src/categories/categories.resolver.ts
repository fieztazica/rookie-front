import { Resolver, Query, Mutation, Args, Parent } from '@nestjs/graphql';
import { CategoriesService } from './categories.service';
import { Category, PaginatedCategory } from './entities/category.entity';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { PaginationArgs } from 'src/common/graphql/pagination.args';
import { FindManyCategoryArgs } from 'src/__generated__/category/find-many-category.args';

@Resolver(() => Category)
export class CategoriesResolver {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Mutation(() => Category)
  createCategory(
    @Args('createCategoryInput') createCategoryInput: CreateCategoryInput,
  ): Promise<Category> {
    return this.categoriesService.create(createCategoryInput);
  }

  @Query(() => [Category], { name: 'categories' })
  async findAll(@Args() options: FindManyCategoryArgs) {
    return this.categoriesService.findAll(options);
  }

  @Query(() => PaginatedCategory, { name: 'paginatedCategories' })
  async paginatedFindAll(@Args() options: PaginationArgs) {
    return this.categoriesService.paginatedFindAll(options);
  }

  @Query(() => Category, { name: 'category' })
  findOne(@Args('id', { type: () => String }) id: string): Promise<Category> {
    return this.categoriesService.findOne(id);
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
