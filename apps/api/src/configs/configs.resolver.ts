import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ConfigsService } from './configs.service';
import { Config } from './entities/config.entity';
import { CreateConfigInput } from './dto/create-config.input';
import { UpdateConfigInput } from './dto/update-config.input';
import { FindManyConfigArgs } from 'src/__generated__/config/find-many-config.args';

@Resolver(() => Config)
export class ConfigsResolver {
  constructor(private readonly configsService: ConfigsService) {}

  @Mutation(() => Config)
  createConfig(
    @Args('createConfigInput') createConfigInput: CreateConfigInput,
  ) {
    return this.configsService.create(createConfigInput);
  }

  @Query(() => [Config], { name: 'configs' })
  findAll(@Args() options: FindManyConfigArgs) {
    return this.configsService.findAll(options);
  }

  @Query(() => [Config], { name: 'paginatedConfigs' })
  paginatedFindAll() {
    return this.configsService.findAll();
  }

  @Query(() => Config, { name: 'config' })
  findOne(@Args('key', { type: () => String }) key: string) {
    return this.configsService.findOne(key);
  }

  @Mutation(() => Config)
  updateConfig(
    @Args('updateConfigInput') updateConfigInput: UpdateConfigInput,
  ) {
    return this.configsService.update(updateConfigInput.key, updateConfigInput);
  }

  @Mutation(() => Config)
  removeConfig(@Args('key', { type: () => String }) key: string) {
    return this.configsService.remove(key);
  }
}
