import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
import * as csurf from 'csurf';
import { Logger } from '@nestjs/common';

const PORT = 8001; //process.env.PORT || 8000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

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
