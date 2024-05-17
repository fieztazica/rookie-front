import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory, Reflector } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import compression from 'compression';
import RedisStore from 'connect-redis';
import session from 'express-session';
// import * as hbs from 'hbs';
import helmet from 'helmet';
import passport from 'passport';
import { join } from 'path';
import { createClient } from 'redis';
import { AppModule } from './app.module';
import { ExpressHandlebars } from 'express-handlebars';
import { helpers } from './common/config/handlebarsHelpers';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const configService: ConfigService = app.get(ConfigService);
  const port: number = configService.get('port');
  const redisClient = await createClient()
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

  app.useStaticAssets(join(process.cwd(), 'public'));
  app.setBaseViewsDir(join(process.cwd(), 'views'));

  const hbs = new ExpressHandlebars({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: join(process.cwd(), 'views', 'layouts'),
    helpers,
  });

  app.engine('.hbs', hbs.engine);
  app.setViewEngine('.hbs');
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
