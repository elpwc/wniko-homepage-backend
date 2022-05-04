import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
import * as csurf from 'csurf';
import { Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as path from 'path';
import * as fs from 'fs';

const PORT = 8001; //process.env.PORT || 8000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Wniko API')
    .setDescription('')
    .setVersion('1.0.0')
    //.addTag('114,a')
    //.setBasePath('http://localhost:8001')
    .build();

  const document = SwaggerModule.createDocument(app, options);

  fs.writeFileSync(path.resolve(process.cwd(), './swagger.json'), JSON.stringify(document));

  SwaggerModule.setup('/api', app, document);

  app.setGlobalPrefix('api/v1');

  app.enableCors();

  //防止跨站脚本攻击
  app.use(helmet());

  //CSRF保护：跨站点请求伪造
  //app.use(csurf());

  await app.listen(PORT, () => {
    Logger.log('Service start.');
  });
}
bootstrap();
