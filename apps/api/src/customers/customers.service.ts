import { Inject, Injectable } from '@nestjs/common';
import {
  CustomerCreateInput,
  CustomerPrisma,
  CustomerUpdateInput,
  FindManyCustomerArgs,
} from '@repo/db';
import { ENHANCED_PRISMA } from '@zenstackhq/server/nestjs';
import {
  createPaginator,
  PaginatedResult,
  PaginateOptions,
} from 'prisma-pagination';
import { PrismaService } from '../common/database/prisma.service';

@Injectable()
export class CustomersService {
  constructor(
    @Inject(ENHANCED_PRISMA) private readonly prisma: PrismaService,
  ) {}
  create(createCustomerInput: CustomerCreateInput): Promise<CustomerPrisma> {
    return this.prisma.customer.create({ data: createCustomerInput });
  }

  findAll(
    options: PaginateOptions = {},
  ): Promise<PaginatedResult<CustomerPrisma>> {
    const paginate = createPaginator(options);
    return paginate<CustomerPrisma, FindManyCustomerArgs>(
      this.prisma.customer,
      {
        where: { deleted: { equals: false } },
      },
    );
  }

  findOne(id: string): Promise<CustomerPrisma> {
    return this.prisma.customer.findUnique({ where: { id, deleted: false } });
  }

  update(
    id: string,
    updateCustomerInput: CustomerUpdateInput,
  ): Promise<CustomerPrisma> {
    return this.prisma.customer.update({
      where: { id, deleted: false },
      data: updateCustomerInput,
    });
  }

  remove(id: string): Promise<CustomerPrisma> {
    return this.prisma.customer.update({
      where: { id, deleted: false },
      data: {
        deleted: true,
      },
    });
  }
}
