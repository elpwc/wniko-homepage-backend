import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Logger,
  Put,
} from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import {
  ApiExtraModels,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
  getSchemaPath,
} from '@nestjs/swagger';
import { Project } from './entities/project.entity';
import {ListDto,  ApiPaginatedResponse } from '../responseData';

@Controller('projects')
@ApiTags('Projects')
@ApiExtraModels(ListDto)
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  @ApiOperation({ operationId: 'postProject', description: '' })
  create(@Body() createProjectDto: CreateProjectDto) {
    console.log(createProjectDto);
    Logger.log('New project insert. ', createProjectDto.name);
    return this.projectsService.create(createProjectDto);
  }

  @Get()
  @ApiTags('getAllProjects')
  @ApiOperation({ operationId: 'getProjects', description: '' })
  @ApiPaginatedResponse(Project)
  findAll(): Promise<Project[]> {
    return this.projectsService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'success', type: Project })
  findOne(@Param('id') id: string) {
    return this.projectsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
    return this.projectsService.update(+id, updateProjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectsService.remove(+id);
  }
}
