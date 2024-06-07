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
import { BlogsService } from './blogs.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { ApiExtraModels, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ApiPaginatedResponse, ListDto } from 'src/responseData';
import { Blog } from './entities/blog.entity';

@Controller('blogs')
@ApiTags('Blog')
@ApiExtraModels(ListDto)
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @Post()
  async create(@Body() createBlogDto: CreateBlogDto) {
    Logger.log('New blog insert. ', createBlogDto.title);
    return this.blogsService.create(createBlogDto);
  }

  @Get()
  @ApiPaginatedResponse(Blog)
  async findAll() {
    return this.blogsService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'success', type: Blog })
  async findOne(@Param('id') id: string) {
    return this.blogsService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateBlogDto: UpdateBlogDto) {
    return this.blogsService.update(+id, updateBlogDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.blogsService.remove(+id);
  }
}
