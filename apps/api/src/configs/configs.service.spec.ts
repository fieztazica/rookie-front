import { Test, TestingModule } from '@nestjs/testing';
import { ConfigsService } from './configs.service';

export const mockConfigs = [
  { key: 'about', value: 'about', deleted: false },
  {
    key: 'API_KEY',
    value: 'API_KEY',
    deleted: false,
  },
];

export const paginatedConfigs = {
  data: [mockConfigs],
  meta: {
    total: mockConfigs.length,
    page: 1,
    lastPage: 1,
    perPage: 10,
    prev: null,
    next: null,
  },
};

export const oneConfig = mockConfigs[0];
export const updatedConfig = { ...oneConfig, value: 'updated' };
export const deletedConfig = { ...oneConfig, deleted: true };

export const mockConfigsService = {
  create: jest.fn().mockResolvedValue(oneConfig),
  findAll: jest.fn().mockResolvedValue(mockConfigs),
  paginatedFindAll: jest.fn().mockResolvedValue(paginatedConfigs),
  findOne: jest.fn().mockResolvedValue(oneConfig),
  get: jest.fn().mockResolvedValue(oneConfig),
  set: jest.fn().mockResolvedValue(oneConfig),
  getOrSet: jest.fn().mockResolvedValue(oneConfig),
  update: jest.fn().mockResolvedValue(updatedConfig),
  remove: jest.fn().mockResolvedValue(deletedConfig),
};

describe('ConfigsService', () => {
  let service: ConfigsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [{ provide: ConfigsService, useValue: mockConfigsService }],
    }).compile();

    service = module.get<ConfigsService>(ConfigsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('get', () => {
    it('should returns key value pair object', async () => {
      expect(await service.get('about')).toEqual(oneConfig);
    });
  });

  describe('set', () => {
    it('should returns the setted key value pair object', async () => {
      expect(await service.set('about', 'about')).toEqual(oneConfig);
    });
  });

  describe('getOrSet', () => {
    it('should returns key value pair object if pair does not exist', async () => {
      expect(await service.getOrSet('about', 'about')).toEqual(oneConfig);
    });
  });

  describe('update', () => {
    it('should returns the updated key value pair object', async () => {
      expect(
        await service.update('about', {
          key: 'about',
          value: 'updated',
        }),
      ).toEqual(updatedConfig);
    });
  });

  describe('remove', () => {
    it('should returns the deleted key value pair object', async () => {
      expect(await service.remove('about')).toEqual(deletedConfig);
    });
  });

  describe('findAll', () => {
    it('should returns an array of key value pair objects', async () => {
      expect(await service.findAll()).toEqual(mockConfigs);
    });
  });

  describe('paginatedFindAll', () => {
    it('should returns the paginated with meta and data of key value pair objects', async () => {
      expect(await service.paginatedFindAll()).toEqual(paginatedConfigs);
    });
  });

  describe('findOne', () => {
    it('should returns the key value pair object', async () => {
      expect(await service.findOne('key')).toEqual(oneConfig);
    });
  });

  describe('create', () => {
    it('should returns the created key value pair object', async () => {
      expect(await service.create({ key: 'about', value: 'about' })).toEqual(
        oneConfig,
      );
    });
  });
});
