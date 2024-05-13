import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersResolver } from './customers.resolver';
import { PrismaModule } from '../common/database/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [CustomersResolver, CustomersService],
})
export class CustomersModule {}
