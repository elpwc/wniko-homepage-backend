import { BlogSubject } from "src/blog-subjects/entities/blog-subject.entity";

export class CreateBlogDto {
  title: string;
  author: string;
  viewCount: number;
  subjectId: number;
  lang: string;
  location: string;
  content: string;
  headPageUrl: string;
  access: 'public' | 'urasekai' | 'private';
  createTime: string;
  updateTime: string;
  isDraft: boolean;
}
