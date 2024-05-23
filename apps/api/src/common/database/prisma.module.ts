import { Global, Module } from '@nestjs/common';
import { enhance } from '@zenstackhq/runtime';
import { ZenStackModule } from '@zenstackhq/server/nestjs';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  imports: [
    ZenStackModule.registerAsync({
      useFactory: (prisma: PrismaService) => {
        return {
          getEnhancedPrisma: () =>
            enhance(prisma, undefined, { kinds: ['omit'] }),
        };
      },
      inject: [PrismaService],
      extraProviders: [PrismaService],
      global: true,
    }),
  ],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
