import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { ProjectModel } from './project.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([ProjectModel])],
  controllers: [ProjectsController],
  providers: [ProjectsService],
})
export class ProjectsModule {}
