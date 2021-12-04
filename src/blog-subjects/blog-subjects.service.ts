import { Injectable } from '@nestjs/common';
import { CreateBlogSubjectDto } from './dto/create-blog-subject.dto';
import { UpdateBlogSubjectDto } from './dto/update-blog-subject.dto';

@Injectable()
export class BlogSubjectsService {
  create(createBlogSubjectDto: CreateBlogSubjectDto) {
    return 'This action adds a new blogSubject';
  }

  findAll() {
    return `This action returns all blogSubjects`;
  }

  findOne(id: number) {
    return `This action returns a #${id} blogSubject`;
  }

  update(id: number, updateBlogSubjectDto: UpdateBlogSubjectDto) {
    return `This action updates a #${id} blogSubject`;
  }

  remove(id: number) {
    return `This action removes a #${id} blogSubject`;
  }
}
