import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CacheModule } from '@nestjs/cache-manager';
import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ThrottlerModule } from '@nestjs/throttler';
import * as redisStore from 'cache-manager-redis-store';
import { join } from 'path';
import type { RedisClientOptions } from 'redis';
import { AdminModule } from './admin/admin.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AuthorsModule } from './authors/authors.module';
import { CategoriesModule } from './categories/categories.module';
import configuration from './common/config/configuration';
import { validate } from './common/config/env.validation';
import { PrismaModule } from './common/database/prisma.module';
import { PrismaService } from './common/database/prisma.service';
import { CustomersModule } from './customers/customers.module';
import { FeedbacksModule } from './feedbacks/feedbacks.module';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';
import { RedisModule } from './redis/redis.module';
import { CartModule } from './cart/cart.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './auth/guard/roles.guard';

const serveStaticFactory = {
  useFactory: () => {
    const jqueryPath = join(process.cwd(), 'node_modules', 'jquery', 'dist');
    return [
      {
        rootPath: jqueryPath,
        serveRoot: '/jquery/',
      },
    ];
  },
};

@Global()
@Module({
  imports: [
    ServeStaticModule.forRootAsync(serveStaticFactory),
    PrismaModule,
    CustomersModule,
    FeedbacksModule,
    CategoriesModule,
    ProductsModule,
    OrdersModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validate,
      expandVariables: true,
    }),
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        throttlers: [
          {
            ttl: config.get('THROTTLE_TTL'),
            limit: config.get('THROTTLE_LIMIT'),
          },
        ],
      }),
    }),
    CacheModule.registerAsync<RedisClientOptions>({
      isGlobal: true,
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        ttl: configService.get('cacheTtl'),
        store: redisStore,
        url: configService.get('redisUrl'),
      }),
      inject: [ConfigService],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: '~schema.gql',
      playground: true,
    }),
    AdminModule,
    AuthModule,
    RedisModule,
    AuthorsModule,
    CartModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
