import { Cache, Store } from 'cache-manager';
import { createClient } from 'redis';

export type RedisClient = ReturnType<typeof createClient>;

export interface RedisCache extends Cache {
  store: RedisStore;
}

export interface RedisStore extends Store {
  name: 'redis';
  getClient: () => RedisClient;
  isCacheableValue: (value: any) => boolean;
}
