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

  @Column({nullable: true})
  @ApiProperty()
  description: string;

  @Column({nullable: true})
  @ApiProperty()
  url: string;

  @Column({nullable: true})
  @ApiProperty()
  githuburl: string;

  @Column({nullable: true})
  @ApiProperty()
  starttime: string;

  @Column({nullable: true})
  @ApiProperty()
  version: string;

  //@ManyToMany(() => TechnologyEntity, (technology) => technology.projects)
  //technologies: TechnologyEntity[];
  @Column('simple-array')
  @ApiProperty()
  technologies: string[];

  @Column({nullable: true})
  @ApiProperty()
  headImageUrl: string;

  @Column()
  @ApiProperty()
  status: DevStatus;

  @Column({ default: false })
  @ApiProperty()
  isprivate: boolean;
}
