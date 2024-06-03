import { Test, TestingModule } from '@nestjs/testing';
import { ConfigsService } from './configs.service';

const mockConfigs = [
  { key: 'about', value: 'about', deleted: false },
  {
    key: 'API_KEY',
    value: 'API_KEY',
    deleted: false,
  },
];

const paginatedConfigs = {
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

const oneConfig = mockConfigs[0];
const updatedConfig = { ...oneConfig, value: 'updated' };
const deletedConfig = { ...oneConfig, deleted: true };

const mockConfigsService = {
  create: jest.fn().mockReturnValue(oneConfig),
  findAll: jest.fn().mockReturnValue(mockConfigs),
  paginatedFindAll: jest.fn().mockReturnValue(paginatedConfigs),
  findOne: jest.fn().mockReturnValue(oneConfig),
  get: jest.fn().mockReturnValue(oneConfig),
  set: jest.fn().mockReturnValue(oneConfig),
  getOrSet: jest.fn().mockReturnValue(oneConfig),
  update: jest.fn().mockReturnValue(updatedConfig),
  remove: jest.fn().mockReturnValue(deletedConfig),
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
    it('should returns key value pair object', () => {
      expect(service.get('about')).toEqual(oneConfig);
    });
  });

  describe('set', () => {
    it('should returns the setted key value pair object', () => {
      expect(service.set('about', 'about')).toEqual(oneConfig);
    });
  });

  describe('getOrSet', () => {
    it('should returns key value pair object if pair does not exist', () => {
      expect(service.getOrSet('about', 'about')).toEqual(oneConfig);
    });
  });

  describe('update', () => {
    it('should returns the updated key value pair object', () => {
      expect(
        service.update('about', {
          key: 'about',
          value: 'updated',
        }),
      ).toEqual(updatedConfig);
    });
  });

  describe('remove', () => {
    it('should returns the deleted key value pair object', () => {
      expect(service.remove('about')).toEqual(deletedConfig);
    });
  });

  describe('findAll', () => {
    it('should returns an array of key value pair objects', () => {
      expect(service.findAll()).toEqual(mockConfigs);
    });
  });

  describe('paginatedFindAll', () => {
    it('should returns the paginated with meta and data of key value pair objects', () => {
      expect(service.paginatedFindAll()).toEqual(paginatedConfigs);
    });
  });

  describe('findOne', () => {
    it('should returns the key value pair object', () => {
      expect(service.findOne('key')).toEqual(oneConfig);
    });
  });

  describe('create', () => {
    it('should returns the created key value pair object', () => {
      expect(service.create({ key: 'about', value: 'about' })).toEqual(
        oneConfig,
      );
    });
  });
});
