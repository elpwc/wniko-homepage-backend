import { Module } from '@nestjs/common';
import { BlogSubjectsService } from './blog-subjects.service';
import { BlogSubjectsController } from './blog-subjects.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogSubject } from './entities/blog-subject.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BlogSubject])],
  controllers: [BlogSubjectsController],
  providers: [BlogSubjectsService],
})
export class BlogSubjectsModule {}
