import { AuthorCreateInput } from '../../@generated/author/author-create.input';

export { AuthorCreateInput as CreateAuthorInput };

export const DEFAULT_AUTHOR_CREATE_INPUT = (): AuthorCreateInput => ({
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  description: '',
});
