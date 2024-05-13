import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CustomersService } from './customers.service';
import { CreateCustomerInput } from './dto/create-customer.input';
import { UpdateCustomerInput } from './dto/update-customer.input';
import { CustomerEntity } from './entities/customer.entity';

@Resolver(() => CustomerEntity)
export class CustomersResolver {
  constructor(private readonly customersService: CustomersService) {}

  @Mutation(() => CustomerEntity)
  createCustomer(
    @Args('createCustomerInput') createCustomerInput: CreateCustomerInput,
  ) {
    return this.customersService.create(createCustomerInput);
  }

  @Query(() => [CustomerEntity], { name: 'customers' })
  findAll() {
    return this.customersService.findAll();
  }

  @Query(() => CustomerEntity, { name: 'customer' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.customersService.findOne(id);
  }

  @Mutation(() => CustomerEntity)
  updateCustomer(
    @Args('updateCustomerInput') updateCustomerInput: UpdateCustomerInput,
  ) {
    return this.customersService.update(
      updateCustomerInput.id,
      updateCustomerInput,
    );
  }

  @Mutation(() => CustomerEntity)
  removeCustomer(@Args('id', { type: () => String }) id: string) {
    return this.customersService.remove(id);
  }
}
