import { Test, TestingModule } from '@nestjs/testing';
import { ConfigsResolver } from './configs.resolver';
import { ConfigsService } from './configs.service';

describe('ConfigsResolver', () => {
  let resolver: ConfigsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConfigsResolver, ConfigsService],
    }).compile();

    resolver = module.get<ConfigsResolver>(ConfigsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});