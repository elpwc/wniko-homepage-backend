import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { IllustsService } from './illusts.service';
import { CreateIllustDto } from './dto/create-illust.dto';
import { UpdateIllustDto } from './dto/update-illust.dto';
import { ApiTags, ApiExtraModels } from '@nestjs/swagger';
import { ListDto } from 'src/responseData';

@Controller('illusts')
@ApiTags('Illusts')
@ApiExtraModels(ListDto)
export class IllustsController {
  constructor(private readonly illustsService: IllustsService) {}

  @Post()
  create(@Body() createIllustDto: CreateIllustDto) {
    return this.illustsService.create(createIllustDto);
  }

  @Get()
  findAll() {
    return this.illustsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.illustsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIllustDto: UpdateIllustDto) {
    return this.illustsService.update(+id, updateIllustDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.illustsService.remove(+id);
  }
}
