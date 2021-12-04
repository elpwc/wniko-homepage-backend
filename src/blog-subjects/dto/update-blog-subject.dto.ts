import { PartialType } from '@nestjs/mapped-types';
import { CreateBlogSubjectDto } from './create-blog-subject.dto';

export class UpdateBlogSubjectDto extends PartialType(CreateBlogSubjectDto) {}
