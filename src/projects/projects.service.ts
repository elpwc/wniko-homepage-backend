import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './entities/project.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private projectsRepository: Repository<Project>,
  ) {}

  async create(createProjectDto: CreateProjectDto) {
    return await this.projectsRepository.save(createProjectDto);
  }

  async findAll() {
    return this.projectsRepository.find();
  }

  findOne(id: number) {
    return this.projectsRepository.findOne({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateProjectDto: UpdateProjectDto) {
    return await this.projectsRepository.update(id, updateProjectDto);
  }

  async remove(id: number): Promise<void> {
    await this.projectsRepository.delete(id);
  }
}
