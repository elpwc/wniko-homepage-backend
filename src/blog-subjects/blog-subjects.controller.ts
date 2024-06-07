import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Logger,
} from '@nestjs/common';
import { BlogSubjectsService } from './blog-subjects.service';
import { CreateBlogSubjectDto } from './dto/create-blog-subject.dto';
import { UpdateBlogSubjectDto } from './dto/update-blog-subject.dto';
import { ApiTags, ApiExtraModels } from '@nestjs/swagger';
import { ListDto } from 'src/responseData';

@Controller('blog-subjects')
@ApiTags('BlogSubjects')
@ApiExtraModels(ListDto)
export class BlogSubjectsController {
  constructor(private readonly blogSubjectsService: BlogSubjectsService) {}

  @Post()
  create(@Body() createBlogSubjectDto: CreateBlogSubjectDto) {
    Logger.log('New blog subject insert. ', createBlogSubjectDto.title);
    return this.blogSubjectsService.create(createBlogSubjectDto);
  }

  @Get()
  findAll() {
    return this.blogSubjectsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blogSubjectsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBlogSubjectDto: UpdateBlogSubjectDto,
  ) {
    return this.blogSubjectsService.update(+id, updateBlogSubjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blogSubjectsService.remove(+id);
  }
}
