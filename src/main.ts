import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
import * as csurf from 'csurf';
import { Logger } from '@nestjs/common';
import {
  DocumentBuilder,
  SwaggerDocumentOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import * as cors from 'cors';
import { INDEV } from './config';

const PORT = 8002; //process.env.PORT || 8000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Wniko API')
    .setDescription('')
    .setVersion('1.0.0')
    //.addTag('114,a')
    //.setBasePath('http://localhost:8001')
    .build();

  const options: SwaggerDocumentOptions = {
    operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
  };

  const document = SwaggerModule.createDocument(app, config, options);

  SwaggerModule.setup('/api', app, document);

  app.enableCors();
  //app.use(helmet());
  //app.use(csurf());
  
  app.setGlobalPrefix(INDEV ? 'api/v1' : 'server/homepage/api/v1');

  app.use(
    INDEV
      ? cors({
          origin: 'http://localhost:3001',
          methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
          allowedHeaders: ['Content-Type'],
        })
      : cors({
          origin: 'https://www.elpwc.com/',
          methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
          allowedHeaders: ['Content-Type'],
        }),
  );


  await app.listen(PORT, () => {
    Logger.log('Service start.');
  });
}
bootstrap();
