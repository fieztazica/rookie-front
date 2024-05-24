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

  hGet(key: string, field: string) {
    return this.cacheManager.get(`${key}:${field}`);
  }

  hGetAll(key: string) {
    return this.cacheManager.get(`${key}:*`);
  }

  hDel(key: string, field: string) {
    return this.cacheManager.del(`${key}:${field}`);
  }

  async hGetJson<T>(key: string, field: string) {
    const result = await this.hGet(key, field);
    if (!result) return null;
    return JSON.parse(result as string) as T;
  }

  hSetJson<T>(key: string, field: string, value: T) {
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
