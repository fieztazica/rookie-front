import { AuthorCreateInput } from 'src/__generated__/author/author-create.input';

export { AuthorCreateInput as CreateAuthorInput };

export const DEFAULT_AUTHOR_CREATE_INPUT = (): AuthorCreateInput => ({
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  description: '',
});
