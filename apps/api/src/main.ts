import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory, Reflector } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import compression from 'compression';
import RedisStore from 'connect-redis';
import session from 'express-session';
import helmet from 'helmet';
import passport from 'passport';
import { join } from 'path';
import { createClient } from 'redis';
import { AppModule } from './app.module';
import { expressSessionOptions } from './common/config/expressSessionOptions';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const configService: ConfigService = app.get(ConfigService);
  const port: number = configService.get('port');
  const redisUrl: string = configService.get('redisUrl');
  const redisClient = await createClient({
    url: redisUrl,
  })
    .on('error', (err) => console.log('Redis Client Error', err))
    .connect();
  const sessionSecret: string = configService.get('sessionSecret');

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
      ...expressSessionOptions,
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());

  app.useStaticAssets(join(process.cwd(), 'public'));
  app.setBaseViewsDir(join(process.cwd(), 'views'));

  app.setViewEngine('pug');
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
