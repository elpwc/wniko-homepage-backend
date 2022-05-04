import { ApiProperty } from '@nestjs/swagger';
import { DevStatus } from 'src/enums/DevStatus';

export class CreateProjectDto {
  @ApiProperty()
  readonly name: string;
  @ApiProperty()
  readonly description: string;
  @ApiProperty()
  readonly url: string;
  @ApiProperty()
  readonly headImageUrl: string;
  @ApiProperty()
  readonly githuburl: string;
  @ApiProperty()
  readonly starttime: string;
  @ApiProperty()
  readonly version: string;
  @ApiProperty()
  readonly technologies: string[];
  @ApiProperty({description: '状态'})
  readonly status: DevStatus;
  @ApiProperty()
  readonly isprivate: boolean;
}
