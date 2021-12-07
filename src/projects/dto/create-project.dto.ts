import { Technology } from 'src/technologies/entities/technology.entity';

export class CreateProjectDto {
  readonly name: string;
  readonly description: string;
  readonly url: string;
  readonly githuburl: string;
  readonly starttime: Date;
  readonly version: string;
  readonly technologies: Technology[];
}
