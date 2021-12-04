import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BlogSubjectsService } from './blog-subjects.service';
import { CreateBlogSubjectDto } from './dto/create-blog-subject.dto';
import { UpdateBlogSubjectDto } from './dto/update-blog-subject.dto';

@Controller('blog-subjects')
export class BlogSubjectsController {
  constructor(private readonly blogSubjectsService: BlogSubjectsService) {}

  @Post()
  create(@Body() createBlogSubjectDto: CreateBlogSubjectDto) {
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
  update(@Param('id') id: string, @Body() updateBlogSubjectDto: UpdateBlogSubjectDto) {
    return this.blogSubjectsService.update(+id, updateBlogSubjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blogSubjectsService.remove(+id);
  }
}
