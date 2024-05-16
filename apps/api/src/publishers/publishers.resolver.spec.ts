import { Test, TestingModule } from '@nestjs/testing';
import { PublishersResolver } from './publishers.resolver';
import { PublishersService } from './publishers.service';

describe('PublishersResolver', () => {
  let resolver: PublishersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PublishersResolver, PublishersService],
    }).compile();

    resolver = module.get<PublishersResolver>(PublishersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
