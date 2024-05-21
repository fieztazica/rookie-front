import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CategoriesService } from './categories.service';
import { Category } from './entities/category.entity';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';

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
  async findAll(): Promise<Category[]> {
    return (await this.categoriesService.findAll()).data;
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
