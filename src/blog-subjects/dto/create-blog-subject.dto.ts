import { Blog } from 'src/blogs/entities/blog.entity';

export class CreateBlogSubjectDto {
  id: number;

  title: string;
  description: string;
  access: 'public' | 'urasekai' | 'private';
  //blog: Blog[];
}
