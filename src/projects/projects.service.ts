import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ProjectModel } from './project.model';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectModel(ProjectModel)
    private projectModel: typeof ProjectModel,
  ) {}

  create(createProjectDto: CreateProjectDto) {
    return this.projectModel.create(createProjectDto);
  }

  async findAll() {
    return this.projectModel.findAll();
  }

  findOne(id: number) {
    return this.projectModel.findOne({
      where: {
        id,
      },
    });
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return `This action updates a #${id} project`;
  }

  async remove(id: number) {
    const project = await this.findOne(id);
    await project.destroy();
  }
}
