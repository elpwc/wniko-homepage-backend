export class CreateBlogDto {
  title: string;
  author: string;
  viewCount: number;
  subject: number;
  lang: string;
  location: string;
  content: string;
  headPageUrl: string;
  access: 'public' | 'urasekai' | 'private';
  createTime: Date;
  updateTime: Date;
}
