import { DevState } from 'src/enums/DevState';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';

@Entity()
export class Project {
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
  starttime: string;

  @Column()
  version: string;

  //@ManyToMany(() => TechnologyEntity, (technology) => technology.projects)
  //technologies: TechnologyEntity[];
  @Column('simple-array')
  technologies: string[];

  @Column()
  headImageUrl: string;

  @Column()
  state: DevState;

  @Column({ default: false })
  isprivate: boolean;
}
