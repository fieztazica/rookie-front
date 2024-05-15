export default () => ({
  port: parseInt(process.env.API_PORT, 10) || 3000,
  redisUrl: process.env.REDIS_URL || 'redis://localhost:6379',
  sessionSecret: process.env.SESSION_SECRET || 'secret',
});
