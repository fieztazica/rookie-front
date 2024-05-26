import { ConfigCreateInput } from 'src/__generated__/config/config-create.input';

export { ConfigCreateInput as CreateConfigInput };

export const DEFAULT_CONFIG_CREATE_INPUT = (): ConfigCreateInput => ({
  key: '',
  value: '',
});
