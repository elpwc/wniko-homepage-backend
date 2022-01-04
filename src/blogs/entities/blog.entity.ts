import { BlogSubject } from 'src/blog-subjects/entities/blog-subject.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';

@Entity()
export class Blog {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  author: string;
  @Column()
  viewCount: number;
  @Column()
  lang: string;
  @Column()
  location: string;
  @Column()
  content: string;
  @Column()
  headPageUrl: string;
  @Column()
  access: 'public' | 'urasekai' | 'private';
  @Column()
  createTime: string;
  @Column()
  updateTime: string;
  @Column()
  isDraft: boolean;
  @ManyToOne((type) => BlogSubject, (subject) => subject.blogs)
  @JoinColumn({ name: 'subjectId' })
  subject: BlogSubject;
}
