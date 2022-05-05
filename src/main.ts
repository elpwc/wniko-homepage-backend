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

const PORT = 8001; //process.env.PORT || 8000;

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

  app.setGlobalPrefix('api/v1');

  app.enableCors();

  //防止跨站脚本攻击
  app.use(helmet());

  //CSRF保护：跨站点请求伪造
  //app.use(csurf());

  app.use(
    cors({
      origin: 'http://localhost:3000',
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
      allowedHeaders: ['Content-Type'],
    }),
  );

  await app.listen(PORT, () => {
    Logger.log('Service start.');
  });
}
bootstrap();
