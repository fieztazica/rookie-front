import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CustomersService } from './customers.service';
import { Customer } from './entities/customer.entity';
import { CreateCustomerInput } from './dto/create-customer.input';
import { UpdateCustomerInput } from './dto/update-customer.input';

@Resolver(() => Customer)
export class CustomersResolver {
  constructor(private readonly customersService: CustomersService) {}

  @Mutation(() => Customer)
  createCustomer(
    @Args('createCustomerInput') createCustomerInput: CreateCustomerInput,
  ): Promise<Customer> {
    return this.customersService.create(createCustomerInput);
  }

  @Query(() => [Customer], { name: 'customers' })
  async findAll(): Promise<Customer[]> {
    return (await this.customersService.findAll()).data;
  }

  @Query(() => Customer, { name: 'customer' })
  findOne(@Args('id', { type: () => String }) id: string): Promise<Customer> {
    return this.customersService.findOne(id);
  }

  @Mutation(() => Customer)
  updateCustomer(
    @Args('updateCustomerInput') updateCustomerInput: UpdateCustomerInput,
  ): Promise<Customer> {
    return this.customersService.update(
      updateCustomerInput.id,
      updateCustomerInput,
    );
  }

  @Mutation(() => Customer)
  removeCustomer(
    @Args('id', { type: () => String }) id: string,
  ): Promise<Customer> {
    return this.customersService.remove(id);
  }
}
