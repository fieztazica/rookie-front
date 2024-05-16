import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../common/database/prisma.service';
import { ENHANCED_PRISMA } from '@zenstackhq/server/nestjs';
import { CustomerCreateInput } from '../@generated/customer/customer-create.input';
import { CustomerUpdateInput } from '../@generated/customer/customer-update.input';

@Injectable()
export class CustomersService {
  constructor(
    @Inject(ENHANCED_PRISMA) private readonly prisma: PrismaService,
  ) {}
  create(createCustomerInput: CustomerCreateInput) {
    return this.prisma.customer.create({ data: createCustomerInput });
  }

  findAll() {
    return this.prisma.customer.findMany({ where: { deleted: false } });
  }

  findOne(id: string) {
    return this.prisma.customer.findUnique({ where: { id, deleted: false } });
  }

  update(id: string, updateCustomerInput: CustomerUpdateInput) {
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
