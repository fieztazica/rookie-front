import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CustomersService } from './customers.service';
import { Customer, PaginatedCustomer } from './entities/customer.entity';
import { CreateCustomerInput } from './dto/create-customer.input';
import { UpdateCustomerInput } from './dto/update-customer.input';
import { PaginationArgs } from 'src/common/graphql/pagination.args';
import { FindManyCustomerArgs } from 'src/__generated__/customer/find-many-customer.args';

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
  async findAll(@Args() options: FindManyCustomerArgs) {
    return this.customersService.findAll(options);
  }

  @Query(() => PaginatedCustomer, { name: 'paginatedCustomers' })
  async paginatedFindAll(@Args() options: PaginationArgs) {
    return this.customersService.paginatedFindAll(options);
  }

  @Query(() => Customer, { name: 'customer' })
  findOne(@Args('id', { type: () => String }) id: string): Promise<Customer> {
    return this.customersService.findOne(id);
  }

  @Query(() => Customer, { name: 'getCustomerByEmail' })
  getCustomerByEmail(
    @Args('email', { type: () => String }) email: string,
  ): Promise<Customer> {
    return this.customersService.findOneByEmail(email);
  }

  @Query(() => Customer, { name: 'getCustomerByAccountId' })
  findOneByAccountId(
    @Args('accountId', { type: () => String }) accountId: string,
  ): Promise<Customer> {
    return this.customersService.findOneByAccountId(accountId);
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
