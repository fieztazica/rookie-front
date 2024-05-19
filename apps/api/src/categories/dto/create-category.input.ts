import { CategoryCreateInput } from '../../@generated/category/category-create.input';

export { CategoryCreateInput as CreateCategoryInput };

export const DEFAULT_CATEGORY_CREATE_INPUT = (): CategoryCreateInput => ({
  name: '',
  description: '',
});
