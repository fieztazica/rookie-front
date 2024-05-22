import { Inject, Injectable } from '@nestjs/common';
import { ENHANCED_PRISMA } from '@zenstackhq/server/nestjs';
import {
  createPaginator,
  PaginatedResult,
  PaginateOptions,
} from 'prisma-pagination';
import { PrismaService } from '../common/database/prisma.service';
import { Customer } from '@prisma/client';
import { CustomerCreateInput } from 'src/__generated__/customer/customer-create.input';
import { FindManyCustomerArgs } from 'src/__generated__/customer/find-many-customer.args';
import { CustomerUpdateInput } from 'src/__generated__/customer/customer-update.input';

@Injectable()
export class CustomersService {
  constructor(
    @Inject(ENHANCED_PRISMA) private readonly prisma: PrismaService,
  ) {}
  create(createCustomerInput: CustomerCreateInput): Promise<Customer> {
    return this.prisma.customer.create({ data: createCustomerInput });
  }

  findAll(options: PaginateOptions = {}): Promise<PaginatedResult<Customer>> {
    const paginate = createPaginator(options);
    return paginate<Customer, FindManyCustomerArgs>(this.prisma.customer, {
      where: { deleted: { equals: false } },
    });
  }

  findOne(id: string): Promise<Customer> {
    return this.prisma.customer.findUnique({ where: { id, deleted: false } });
  }

  update(
    id: string,
    updateCustomerInput: CustomerUpdateInput,
  ): Promise<Customer> {
    return this.prisma.customer.update({
      where: { id, deleted: false },
      data: updateCustomerInput,
    });
  }

  remove(id: string): Promise<Customer> {
    return this.prisma.customer.update({
      where: { id, deleted: false },
      data: {
        deleted: true,
      },
    });
  }
}
