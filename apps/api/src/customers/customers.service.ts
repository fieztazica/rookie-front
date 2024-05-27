import { Inject, Injectable } from '@nestjs/common';
import { Customer, Prisma } from '@prisma/client';
import { ENHANCED_PRISMA } from '@zenstackhq/server/nestjs';
import {
  createPaginator,
  PaginatedResult,
  PaginateOptions,
} from 'prisma-pagination';
import { PrismaService } from '../common/database/prisma.service';
import { CreateCustomerInput } from './dto/create-customer.input';
import { UpdateCustomerInput } from './dto/update-customer.input';

@Injectable()
export class CustomersService {
  constructor(
    @Inject(ENHANCED_PRISMA) private readonly prisma: PrismaService,
  ) {}
  create(createCustomerInput: CreateCustomerInput) {
    return this.prisma.customer.create({ data: createCustomerInput });
  }

  findAll(
    options: Prisma.CustomerFindManyArgs = {
      where: { deleted: { equals: false } },
    },
  ) {
    return this.prisma.customer.findMany(options);
  }

  paginatedFindAll(
    options: PaginateOptions = {
      page: 1,
      perPage: 10,
    },
  ): Promise<PaginatedResult<Customer>> {
    const paginate = createPaginator(options);
    return paginate<Customer, Prisma.CustomerFindManyArgs>(
      this.prisma.customer,
      {
        where: { deleted: { equals: false } },
      },
    );
  }

  findOne(id: string) {
    return this.prisma.customer.findUnique({ where: { id, deleted: false } });
  }

  findOneByEmail(email: string) {
    return this.prisma.customer.findUnique({
      where: { email, deleted: false },
    });
  }

  findOneByAccountId(accountId: string) {
    return this.prisma.customer.findUnique({
      where: { accountId, deleted: false },
    });
  }

  update(id: string, updateCustomerInput: UpdateCustomerInput) {
    return this.prisma.customer.update({
      where: { id, deleted: false },
      data: updateCustomerInput,
    });
  }

  remove(id: string) {
    return this.prisma.customer.update({
      where: { id, deleted: false },
      data: {
        deleted: true,
      },
    });
  }
}
