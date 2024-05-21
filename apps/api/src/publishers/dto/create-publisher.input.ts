import { PublisherCreateInput } from '@repo/db';

export { PublisherCreateInput as CreatePublisherInput };

export const DEFAULT_PUBLISHER_CREATE_INPUT = (): PublisherCreateInput => ({
  email: '',
  name: '',
  phoneNumber: '',
  website: '',
});
