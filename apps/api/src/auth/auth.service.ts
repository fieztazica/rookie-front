import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { ENHANCED_PRISMA } from '@zenstackhq/server/nestjs';
import { PrismaService } from 'src/common/database/prisma.service';
import { ConfigsService } from 'src/configs/configs.service';
import { CustomersService } from 'src/customers/customers.service';
import { CreateCustomerInput } from 'src/customers/dto/create-customer.input';

@Injectable()
export class AuthService {
  constructor(
    @Inject(ENHANCED_PRISMA) private readonly prisma: PrismaService,
    private readonly customersService: CustomersService,
    private readonly configsService: ConfigsService,
  ) {}

  async register(apiKey: string, createCustomerInput: CreateCustomerInput) {
    const isKeyValid = await this.isKeyValid(apiKey);
    if (!isKeyValid) {
      throw new BadRequestException('Invalid API key');
    }
    createCustomerInput.displayName =
      createCustomerInput.firstName + ' ' + createCustomerInput.lastName;
    return this.customersService.create(createCustomerInput);
  }

  async isKeyValid(apiKey: string) {
    return (await this.configsService.get('API_KEY')).value === apiKey;
  }
}
