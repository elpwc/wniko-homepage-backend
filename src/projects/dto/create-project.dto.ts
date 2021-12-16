export class CreateProjectDto {
  readonly name: string;
  readonly description: string;
  readonly url: string;
  readonly headImageUrl: string;
  readonly githuburl: string;
  readonly starttime: Date;
  readonly version: string;
  readonly technologies: string[];
}
