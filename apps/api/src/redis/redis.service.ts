import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { RedisCache, RedisClient } from './redis.interface';

@Injectable()
export class RedisService {
  private redisClient: RedisClient;
  constructor(@Inject(CACHE_MANAGER) private cacheManager: RedisCache) {
    this.redisClient = this.cacheManager.store.getClient();
  }

  getRedisClient(): RedisClient {
    return this.redisClient;
  }

  hSet(key: string, field: string, value: string) {
    return this.cacheManager.set(`${key}:${field}`, value);
  }

  async hGet(key: string, field: string) {
    const result = await this.cacheManager.get(`${key}:${field}`);
    console.log('hGet', result);
    return result;
  }

  //   async jGet(key: string) {
  //     const result = await this.redisClient..json.get(key);
  //     if (!result) return null;
  //     return result;
  //   }

  //   async jSet<T>(key: string, field: string, value: T) {
  //     return this.redisClient.json.set(key, field, JSON.stringify(value));
  //   }

  async hGetJson<T>(key: string, field: string) {
    const result = await this.hGet(key, field);
    console.log('hGetJson', result);
    if (!result) return null;
    return JSON.parse(result as string) as T;
  }

  async hSetJson<T>(key: string, field: string, value: T) {
    return this.hSet(key, field, JSON.stringify(value));
  }

  async hGetOrSetJson<T>(key: string, field: string, value?: T) {
    const result = await this.hGetJson<T>(key, field);
    if (result) return result;
    if (value) {
      await this.hSetJson(key, field, value);
    }
    return value;
  }
}
