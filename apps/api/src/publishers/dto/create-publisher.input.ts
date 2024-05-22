import { PublisherCreateInput } from 'src/__generated__/publisher/publisher-create.input';

export { PublisherCreateInput as CreatePublisherInput };

export const DEFAULT_PUBLISHER_CREATE_INPUT = (): PublisherCreateInput => ({
  email: '',
  name: '',
  phoneNumber: '',
  website: '',
});
