import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty()
  id: number;
  @Column()
  @ApiProperty()
  title: string;
  @Column()
  @ApiProperty()
  author: string;
  @Column()
  @ApiProperty()
  viewCount: number;
  @Column()
  @ApiProperty()
  lang: string;
  @Column()
  @ApiProperty()
  location: string;
  @Column()
  @ApiProperty()
  content: string;
  @Column()
  @ApiProperty()
  headPageUrl: string;
  @Column()
  @ApiProperty()
  access: 'public' | 'urasekai' | 'private';
  @Column()
  @ApiProperty()
  createTime: string;
  @Column()
  @ApiProperty()
  updateTime: string;
  @Column()
  @ApiProperty()
  isDraft: boolean;
  //@ManyToOne((type) => BlogSubject, (subject) => subject.blogs)
  //subject: BlogSubject;
  @Column()
  @ApiProperty()
  subject: string;
}
