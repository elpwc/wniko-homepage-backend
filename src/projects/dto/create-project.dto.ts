import { DevState } from 'src/enums/DevState';

export class CreateProjectDto {
  readonly name: string;
  readonly description: string;
  readonly url: string;
  readonly headImageUrl: string;
  readonly githuburl: string;
  readonly starttime: string;
  readonly version: string;
  readonly technologies: string[];
  readonly state: DevState;
  readonly isprivate: boolean;
}
