import { ApiProperty } from '@nestjs/swagger';
import { DevStatus } from 'src/enums/DevStatus';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column()
  @ApiProperty()
  name: string;

  @Column()
  @ApiProperty()
  description: string;

  @Column()
  @ApiProperty()
  url: string;

  @Column()
  @ApiProperty()
  githuburl: string;

  @Column()
  @ApiProperty()
  starttime: string;

  @Column()
  @ApiProperty()
  version: string;

  //@ManyToMany(() => TechnologyEntity, (technology) => technology.projects)
  //technologies: TechnologyEntity[];
  @Column('simple-array')
  @ApiProperty()
  technologies: string[];

  @Column()
  @ApiProperty()
  headImageUrl: string;

  @Column()
  @ApiProperty()
  state: DevStatus;

  @Column({ default: false })
  @ApiProperty()
  isprivate: boolean;
}
