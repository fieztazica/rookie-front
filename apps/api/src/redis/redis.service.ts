import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { RedisCache, RedisClient } from './redis.interface';

@Injectable()
export class RedisService implements OnModuleInit {
  private redisClient: RedisClient;
  constructor(@Inject(CACHE_MANAGER) private cacheManager: RedisCache) {
    this.redisClient = this.cacheManager.store.getClient();
  }
  onModuleInit() {}

  getRedisClient(): RedisClient {
    return this.redisClient;
  }

  set(key: string, value: string, ttl?: number) {
    return this.cacheManager.set(key, value, ttl);
  }

  get<T = unknown>(key: string) {
    return this.cacheManager.get<T>(key);
  }

  del(key: string) {
    return this.cacheManager.del(key);
  }

  hSet(key: string, field: string, value: string, ttl?: number) {
    return this.set(`${key}:${field}`, value, ttl);
  }

  hGet<T = unknown>(key: string, field: string) {
    return this.get<T>(`${key}:${field}`);
  }

  hDel(key: string, field: string) {
    return this.del(`${key}:${field}`);
  }

  async hGetJson<T>(key: string, field: string) {
    const result = await this.hGet(key, field);
    if (!result) return null;
    return JSON.parse(result as string) as T;
  }

  hSetJson<T>(key: string, field: string, value: T, ttl?: number) {
    return this.hSet(key, field, JSON.stringify(value), ttl);
  }

  async hGetOrSetJson<T>(key: string, field: string, value?: T, ttl?: number) {
    const result = await this.hGetJson<T>(key, field);
    if (result) return result;
    if (value) {
      await this.hSetJson(key, field, value, ttl);
    }
    return value;
  }

  keys() {
    return this.cacheManager.store.keys();
  }

  async getAll(key: string) {
    const keys = (await this.keys()).filter((k) => k.startsWith(key));
    const result: {
      [key: string]: string;
    } = {};
    for await (const key of keys) {
      result[key] = await this.get(key);
    }
    return result;
  }

  async hGetAllJson<T>(key: string) {
    const all = await this.getAll(key);
    const result: {
      [key: string]: T;
    } = {};
    for (const key in all) {
      const field = key.split(':')[1];
      result[field] = JSON.parse(all[key]) as T;
    }
    return result;
  }
}
