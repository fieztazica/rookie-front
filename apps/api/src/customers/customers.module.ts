import { Module } from '@nestjs/common';
import { CustomersResolver } from './customers.resolver';
import { CustomersService } from './customers.service';

@Module({
  providers: [CustomersResolver, CustomersService],
})
export class CustomersModule {}
