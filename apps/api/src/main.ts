import { INestApplication } from '@nestjs/common';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as compression from 'compression';
import helmet from 'helmet';
import { AppModule } from './app.module';

async function bootstrap() {
  const app: INestApplication = await NestFactory.create(AppModule);

  app.enableCors();
  app.use(helmet());
  app.use(compression());

  const configService: ConfigService = app.get(ConfigService);
  const port: number = configService.get('port');
  app.enableShutdownHooks();

  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, disableErrorMessages: true }),
  );

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
