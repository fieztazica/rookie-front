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
    return this.prisma.customer.findMany();
  }

  findOne(id: string) {
    return this.prisma.customer.findUnique({ where: { id } });
  }

  update(id: string, updateCustomerInput: CustomerUpdateInput) {
    return this.prisma.customer.update({
      where: { id },
      data: updateCustomerInput,
    });
  }

  remove(id: string) {
    return this.prisma.customer.delete({ where: { id } });
  }
}
