import { Test, TestingModule } from '@nestjs/testing';
import { CustomersResolver } from './customers.resolver';
import { CustomersService } from './customers.service';
import { PrismaModule } from '../common/database/prisma.module';

describe('CustomersResolver', () => {
  let resolver: CustomersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [
        { provide: CustomersResolver, useValue: {} },
        { provide: CustomersService, useValue: {} },
      ],
    }).compile();

    resolver = module.get<CustomersResolver>(CustomersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
