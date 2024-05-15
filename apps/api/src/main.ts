import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory, Reflector } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import compression from 'compression';
import hbs from 'hbs';
import helmet from 'helmet';
import { join } from 'path';
import { AppModule } from './app.module';
import { REDIS } from './redis/redis.constants';
import session from 'express-session';
import passport from 'passport';
import RedisStore from 'connect-redis';
import { createClient, RedisClientType } from 'redis';
import { RedisModule } from './redis/redis.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const configService: ConfigService = app.get(ConfigService);
  const port: number = configService.get('port');
  const redisClient = await createClient()
    .on('error', (err) => console.log('Redis Client Error', err))
    .connect();
  const sessionSecret: string = configService.get('sessionSecret');
  console.log(sessionSecret)

  app.enableShutdownHooks();
  app.enableCors();

  app.use(helmet());
  app.use(compression());
  app.use(
    session({
      store: new RedisStore({
        client: redisClient,
      }), // where session will be stored
      secret: sessionSecret, // to sign session id
      resave: false, // will default to false in near future: https://github.com/expressjs/session#resave
      saveUninitialized: false, // will default to false in near future: https://github.com/expressjs/session#saveuninitialized
      rolling: true, // keep session alive
      cookie: {
        maxAge: 30 * 60 * 1000, // session expires in 1hr, refreshed by `rolling: true` option.
        httpOnly: true, // so that cookie can't be accessed via client-side script
      },
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  hbs.registerPartials(join(__dirname, '..', 'views', 'partials'));

  app.setLocal('title', 'Rookie Store');

  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

  const config = new DocumentBuilder()
    .setTitle('Rookie Store API')
    .setDescription('Rookie Store API Document')
    .setVersion('0.1')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/document', app, document);

  await app.listen(port);

  return app;
}

bootstrap()
  .then(async (app) => {
    const url = new URL(await app.getUrl());
    console.log(`Application is running on port: ${url.port}`);
    console.log(`Access: ${url}`);
    console.log(`Access Swagger: ${url}api/document`);
  })
  .catch((err) => console.error('Crashed! ', err));
