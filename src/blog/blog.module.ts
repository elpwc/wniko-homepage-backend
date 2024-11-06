import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { BlogsService } from './blog.service';
import { BlogsController } from './blog.controller';
import { Blog } from './entities/blog.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthMiddleware } from 'auth/auth.middleware';

@Module({
  imports: [TypeOrmModule.forFeature([Blog])],
  controllers: [BlogsController],
  providers: [BlogsService],
})
export class BlogsModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    const rootPath = 'blog';
    consumer
      .apply(AuthMiddleware)
      .forRoutes(
        { path: rootPath, method: RequestMethod.GET },
        { path: rootPath, method: RequestMethod.POST },
        { path: rootPath + '/:id', method: RequestMethod.PATCH },
        { path: rootPath + '/:id', method: RequestMethod.DELETE },
      );
  }
}
