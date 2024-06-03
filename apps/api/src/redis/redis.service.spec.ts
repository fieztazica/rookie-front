import { Test, TestingModule } from '@nestjs/testing';
import { RedisService } from './redis.service';
import { RedisModule } from './redis.module';

const mockRedis = {
  set: jest.fn(),
  get: jest.fn(),
  del: jest.fn(),
  keys: jest.fn(),
  hSet: jest.fn(),
  hGet: jest.fn(),
  hDel: jest.fn(),
  hGetJson: jest.fn(),
  hSetJson: jest.fn(),
  hGetOrSetJson: jest.fn(),
};

describe('RedisService', () => {
  let service: RedisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: RedisService,
          useValue: mockRedis,
        },
      ],
    }).compile();

    service = module.get<RedisService>(RedisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
