import { PartialType } from '@nestjs/mapped-types';
import { CreateIllustDto } from './create-illust.dto';

export class UpdateIllustDto extends PartialType(CreateIllustDto) {}
