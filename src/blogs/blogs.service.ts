import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { Blog } from './entities/blog.entity';

@Injectable()
export class BlogsService {
  constructor(
    @InjectRepository(Blog)
    private blogsRepository: Repository<Blog>,
  ) {}

  async create(createBlogDto: CreateBlogDto) {
    return await this.blogsRepository.save(createBlogDto);
  }

  findAll() {
    return this.blogsRepository.find();
  }

  findOne(id: number) {
    return this.blogsRepository.findOne({ where: { id } });
  }

  async update(id: number, updateBlogDto: UpdateBlogDto) {
    return await this.blogsRepository.update(id, updateBlogDto);
  }

  async remove(id: number) {
    return await this.blogsRepository.delete(id);
  }
}
