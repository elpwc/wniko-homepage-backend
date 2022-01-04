import { Blog } from 'src/blogs/entities/blog.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BlogSubject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;
  @Column()
  description: string;
  @Column()
  access: 'public' | 'urasekai' | 'private';
  @OneToMany((type) => Blog, (blog) => blog.subject)
  blogs: Blog[];
}
