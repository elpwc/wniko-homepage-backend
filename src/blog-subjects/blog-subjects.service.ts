import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBlogSubjectDto } from './dto/create-blog-subject.dto';
import { UpdateBlogSubjectDto } from './dto/update-blog-subject.dto';
import { BlogSubject } from './entities/blog-subject.entity';

@Injectable()
export class BlogSubjectsService {
  constructor(
    @InjectRepository(BlogSubject)
    private repository: Repository<BlogSubject>,
  ) {}

  async create(createBlogSubjectDto: CreateBlogSubjectDto) {
    return await this.repository.save(createBlogSubjectDto);
  }

  findAll() {
    return this.repository.find();
  }

  public findOne(id: number) {
    return this.repository.findOne({ where: { id } });
  }

  async update(id: number, updateBlogSubjectDto: UpdateBlogSubjectDto) {
    return await this.repository.update(id, updateBlogSubjectDto);
  }

  async remove(id: number) {
    return await this.repository.delete(id);
  }
}
