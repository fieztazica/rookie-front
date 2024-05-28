import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ENHANCED_PRISMA } from '@zenstackhq/server/nestjs';
import { PrismaService } from 'src/common/database/prisma.service';
import { CustomersService } from 'src/customers/customers.service';
import { CreateCustomerInput } from 'src/customers/dto/create-customer.input';

@Injectable()
export class AuthService {
  constructor(
    @Inject(ENHANCED_PRISMA) private readonly prisma: PrismaService,
    private readonly customersService: CustomersService,
    private readonly configService: ConfigService,
  ) {}

  async register(apiKey: string, createCustomerInput: CreateCustomerInput) {
    console.log(apiKey, createCustomerInput);
    if (apiKey !== this.configService.get('API_KEY')) {
      throw new BadRequestException('Invalid API key');
    }
    createCustomerInput.displayName =
      createCustomerInput.firstName + ' ' + createCustomerInput.lastName;
    return this.customersService.create(createCustomerInput);
  }
}
