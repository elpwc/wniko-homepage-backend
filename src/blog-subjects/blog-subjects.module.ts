import { Module } from '@nestjs/common';
import { BlogSubjectsService } from './blog-subjects.service';
import { BlogSubjectsController } from './blog-subjects.controller';

@Module({
  controllers: [BlogSubjectsController],
  providers: [BlogSubjectsService]
})
export class BlogSubjectsModule {}
