import { Test, TestingModule } from '@nestjs/testing';
import { ConfigsResolver } from './configs.resolver';
import { ConfigsService } from './configs.service';
import {
  mockConfigsService,
  mockConfigs,
  oneConfig,
  updatedConfig,
  deletedConfig,
} from './configs.service.spec';

describe('ConfigsResolver', () => {
  let resolver: ConfigsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ConfigsResolver,
        { provide: ConfigsService, useValue: mockConfigsService },
      ],
    }).compile();

    resolver = module.get<ConfigsResolver>(ConfigsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('findAll', () => {
    it('should returns an array of key value pair objects', async () => {
      expect(await resolver.findAll({})).toEqual(mockConfigs);
    });
  });

  describe('findOne', () => {
    it('should returns found key value pair object', async () => {
      expect(await resolver.findOne('about')).toEqual(oneConfig);
    });
  });

  describe('create', () => {
    it('should returns created key value pair object', async () => {
      expect(
        await resolver.createConfig({ key: 'about', value: 'about' }),
      ).toEqual(oneConfig);
    });
  });

  describe('update', () => {
    it('should returns updated key value pair object', async () => {
      expect(
        await resolver.updateConfig({
          key: 'about',
          value: 'updated',
        }),
      ).toEqual(updatedConfig);
    });
  });

  describe('remove', () => {
    it('should returns deleted key value pair object', async () => {
      expect(await resolver.removeConfig('about')).toEqual(deletedConfig);
    });
  });
});
