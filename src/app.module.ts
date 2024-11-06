import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogsModule } from './blogs/blogs.module';
import { BlogCommentsModule } from './blog-comments/blog-comments.module';
import { BlogSubjectsModule } from './blog-subjects/blog-subjects.module';
import { RepliesModule } from './replies/replies.module';
import { VisitorsModule } from './visitors/visitors.module';
import { IllustsModule } from './illusts/illusts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from './dataSource';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    TypeOrmModule.forRoot(AppDataSource.options),
    BlogsModule,
    BlogCommentsModule,
    BlogSubjectsModule,
    RepliesModule,
    VisitorsModule,
    IllustsModule,
  ],
})
export class AppModule {}
