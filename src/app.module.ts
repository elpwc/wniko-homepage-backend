import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './projects/projects.module';
import { BlogsModule } from './blogs/blogs.module';
import { BlogCommentsModule } from './blog-comments/blog-comments.module';
import { BlogSubjectsModule } from './blog-subjects/blog-subjects.module';
import { RepliesModule } from './replies/replies.module';
import { VisitorsModule } from './visitors/visitors.module';
import { IllustsModule } from './illusts/illusts.module';

import { ProjectEntity } from './projects/entities/project.entity';

import { dbConfig } from './dbconfig';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    TypeOrmModule.forRoot({
      ...dbConfig,
      models: [ProjectEntity],
      autoLoadModels: true,
      synchronize: true,
    }),
    ProjectsModule,
    BlogsModule,
    BlogCommentsModule,
    BlogSubjectsModule,
    RepliesModule,
    VisitorsModule,
    IllustsModule,
  ],
})
export class AppModule {}
