import { ZenStackModule } from '@zenstackhq/server/nestjs';
import { PrismaService } from './prisma.service';
import { enhance } from '@zenstackhq/runtime';

export const AppZenStackModule = ZenStackModule.registerAsync({
  useFactory: (prisma: PrismaService) => {
    return {
      getEnhancedPrisma: () => enhance(prisma, undefined, { kinds: ['omit'] }),
    };
  },
  inject: [PrismaService],
  extraProviders: [PrismaService],
});
