import { Injectable } from '@nestjs/common';
import { ConfigsService } from 'src/configs/configs.service';
import { CustomersService } from 'src/customers/customers.service';
import { CreateCustomerInput } from 'src/customers/dto/create-customer.input';

@Injectable()
export class AuthService {
  constructor(
    private readonly customersService: CustomersService,
    private readonly configsService: ConfigsService,
  ) {}

  async register(createCustomerInput: CreateCustomerInput) {
    createCustomerInput.displayName =
      createCustomerInput.firstName + ' ' + createCustomerInput.lastName;
    return this.customersService.create(createCustomerInput);
  }

  async isKeyValid(apiKey: string) {
    return (await this.configsService.get('API_KEY')).value === apiKey;
  }
}
