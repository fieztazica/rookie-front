import { Test, TestingModule } from '@nestjs/testing';
import { RedisService } from './redis.service';

const mockRedisData = [
  {
    key: 'key1',
    value: 'value1',
  },
  {
    key: 'key2',
    value: 'value2',
  },
];

const oneData = mockRedisData[0];

const mockRedisService = {
  set: jest.fn(),
  get: jest.fn().mockReturnValue(oneData.value),
  del: jest.fn(),
  keys: jest.fn(),
  hSet: jest.fn(),
  hGet: jest.fn().mockReturnValue(oneData.value),
  hDel: jest.fn(),
  hGetJson: jest.fn().mockReturnValue(oneData),
  hSetJson: jest.fn(),
  hGetOrSetJson: jest.fn().mockReturnValue(oneData),
};

describe('RedisService', () => {
  let service: RedisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: RedisService,
          useValue: mockRedisService,
        },
      ],
    }).compile();

    service = module.get<RedisService>(RedisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('get', () => {
    it('should returns the value of provided key', () => {
      expect(service.get<(typeof oneData)['value']>(oneData.key)).toEqual(
        oneData.value,
      );
    });
  });

  describe('hGet', () => {
    it('should returns the value of provided key and field', () => {
      expect(
        service.hGet<(typeof oneData)['value']>(oneData.key, 'field'),
      ).toEqual(oneData.value);
    });
  });

  describe('hGetJson', () => {
    it('should returns the value as T of provided key and field or set the value', () => {
      expect(service.hGetJson<typeof oneData>(oneData.key, 'field')).toEqual(
        oneData,
      );
    });
  });

  describe('hGetOrSetJson', () => {
    it('should returns the value as T of provided key and field or set the value', () => {
      expect(service.hGetOrSetJson(oneData.key, 'field', oneData)).toEqual(
        oneData,
      );
    });
  });
});
