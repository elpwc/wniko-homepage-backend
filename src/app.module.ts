import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './projects/projects.module';
import { TechnologiesModule } from './technologies/technologies.module';
import { BlogsModule } from './blogs/blogs.module';
import { BlogCommentsModule } from './blog-comments/blog-comments.module';
import { BlogSubjectsModule } from './blog-subjects/blog-subjects.module';
import { RepliesModule } from './replies/replies.module';
import { VisitorsModule } from './visitors/visitors.module';
import { IllustsModule } from './illusts/illusts.module';
import { SequelizeModule } from '@nestjs/sequelize';

import { ProjectModel } from './projects/project.model';
import { dbConfig } from './dbconfig';
import { TechnologyModel } from './technologies/technology.model';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    SequelizeModule.forRoot({
      ...dbConfig,
      models: [ProjectModel, TechnologyModel],
      autoLoadModels: true,
      synchronize: true,
    }),
    ProjectsModule,
    TechnologiesModule,
    BlogsModule,
    BlogCommentsModule,
    BlogSubjectsModule,
    RepliesModule,
    VisitorsModule,
    IllustsModule,
  ],
})
export class AppModule {}
