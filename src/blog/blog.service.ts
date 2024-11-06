import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BlogSubjectsService } from 'src/blog-subjects/blog-subjects.service';
import { Repository } from 'typeorm';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { Blog } from './entities/blog.entity';
import _ from 'lodash';
import { AppDataSource } from 'src/dataSource';

@Injectable()
export class BlogsService {
  constructor(
    @InjectRepository(Blog)
    private readonly blogsRepository: Repository<Blog>,
  ) {}

  async create(createBlogDto: CreateBlogDto) {
    console.log('CREATE blog: ', createBlogDto.title, new Date());
    return await this.blogsRepository.save(createBlogDto);
  }

  async findAll(query) {
    // console.log(2, AppDataSource.isInitialized);
    // console.log(44444444444444444, AppDataSource.entityMetadatasMap);
    // console.log(444444444444444444444, AppDataSource.entityMetadatasMap.keys());
    // console.log(5, AppDataSource.isInitialized);
    const qb =
      await AppDataSource.getRepository(Blog).createQueryBuilder('blog');
    qb.where('1 = 1');

    if ('subject' in query && query.subject !== '') {
      qb.andWhere('FIND_IN_SET(:subject, blog.subject) > 0', {
        subject: query.subject,
      });
    }
    if ('includeDraft' in query) {
      if (query.includeDraft !== '1') {
        qb.andWhere('blog.isDraft = 0');
      }
    }
    if ('from' in query) {
      qb.offset(query.from);
    }
    if ('num' in query) {
      qb.limit(query.num);
    }

    qb.orderBy('blog.createtime', 'DESC');

    const count = await qb.getCount();

    const blogs = await qb.getMany();

    return { data: blogs, count };
  }

  findOne(id: number) {
    return this.blogsRepository.findOne({ where: { id } });
  }

  async update(id: number, updateBlogDto: UpdateBlogDto) {
    console.log('UPDATE blog: [', id, '] ', updateBlogDto.title, new Date());
    return await this.blogsRepository.update(id, updateBlogDto);
  }

  async remove(id: number) {
    console.log('DELETE blog: [', id, '] ', new Date());
    return await this.blogsRepository.delete(id);
  }
}
