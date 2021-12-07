import { Technology } from 'src/technologies/entities/technology.entity';

export class Project {
  name: string;
  description: string;
  url: string;
  githuburl: string;
  starttime: Date;
  version: string;
  technologies: Technology[];
}
