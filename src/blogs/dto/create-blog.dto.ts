import { ApiProperty } from "@nestjs/swagger";
import { BlogSubject } from "src/blog-subjects/entities/blog-subject.entity";

export class CreateBlogDto {
  @ApiProperty()
  readonly title: string;
  @ApiProperty()
  readonly author: string;
  @ApiProperty()
  readonly viewCount: number;
  @ApiProperty()
  readonly subject: string;
  @ApiProperty()
  readonly lang: string;
  @ApiProperty()
  readonly location: string;
  @ApiProperty()
  readonly content: string;
  @ApiProperty()
  readonly headPageUrl: string;
  @ApiProperty()
  readonly access: string;
  @ApiProperty()
  readonly isDraft: boolean;
}
