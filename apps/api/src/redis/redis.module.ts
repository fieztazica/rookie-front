import { Module } from '@nestjs/common';
import { createClient } from 'redis';
import { REDIS } from './redis.constants';

@Module({
  providers: [
    {
      provide: REDIS,
      useValue: async () => {
        const client = await createClient({
            url: process.env.REDIS_URL
        })
          .on('error', (err) => console.log('Redis Client Error', err))
          .connect();
        return client;
      },
    },
  ],
  exports: [REDIS],
})
export class RedisModule {}
