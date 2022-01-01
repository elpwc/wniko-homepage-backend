import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BlogEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  author: string;
  @Column()
  viewCount: number;
  @Column()
  subject: number;
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
  createTime: Date;
  @Column()
  updateTime: Date;
}
