import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProjectEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  url: string;

  @Column()
  githuburl: string;

  @Column()
  starttime: Date;

  @Column()
  version: string;

  @Column()
  technologies: string;

  @Column()
  headImageUrl: string;
}
