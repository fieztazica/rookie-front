import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { createPaginator, PaginateOptions } from 'prisma-pagination';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  createPaginator(options: PaginateOptions = {}) {
    return createPaginator(options);
  }
}
