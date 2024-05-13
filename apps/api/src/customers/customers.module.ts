import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersResolver } from './customers.resolver';
import { PrismaModule } from '../common/database/prisma.module';
import { ZenStackModule } from '@zenstackhq/server/nestjs';
import { PrismaService } from '../common/database/prisma.service';
import { enhance } from '@zenstackhq/runtime';
import { AppZenStackModule } from '../common/database/app-zenstack.module';

@Module({
  imports: [AppZenStackModule],
  providers: [CustomersResolver, CustomersService],
})
export class CustomersModule {}
