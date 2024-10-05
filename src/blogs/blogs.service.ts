import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BlogSubjectsService } from 'src/blog-subjects/blog-subjects.service';
import { Repository, createQueryBuilder } from 'typeorm';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { Blog } from './entities/blog.entity';
import _ from 'lodash';

@Injectable()
export class BlogsService {
  constructor(
    @InjectRepository(Blog)
    private blogsRepository: Repository<Blog>,
  ) {}

  async create(createBlogDto: CreateBlogDto) {
    return await this.blogsRepository.save(createBlogDto);
  }

  async findAll(query) {
    const qb = await this.blogsRepository.createQueryBuilder('blogs');
    qb.where('1 = 1');

    if ('subject' in query && query.subject !== '') {
      qb.andWhere('FIND_IN_SET(:subject, blogs.subject) > 0', {
        subject: query.subject,
      });
    }
    if ('includeDraft' in query) {
      if (query.includeDraft !== '1') {
        qb.andWhere('blogs.isDraft = 0');
      }
    }
    if ('from' in query) {
      qb.offset(query.from);
    }
    if ('num' in query) {
      qb.limit(query.num);
    }

    qb.orderBy('blogs.createtime', 'DESC');

    const count = await qb.getCount();

    const blogs = await qb.getMany();

    return { data: blogs, count };
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
