import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { ProjectEntity } from './project.entity';

@Entity()
export class TechnologyEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => ProjectEntity, (project) => project.technologies)
  projects: ProjectEntity[];
}
