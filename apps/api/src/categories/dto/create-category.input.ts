import { CategoryCreateInput } from '@repo/db';

export { CategoryCreateInput as CreateCategoryInput };

export const DEFAULT_CATEGORY_CREATE_INPUT = (): CategoryCreateInput => ({
  name: '',
  description: '',
});
