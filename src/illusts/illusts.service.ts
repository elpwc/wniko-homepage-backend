import { Injectable } from '@nestjs/common';
import { CreateIllustDto } from './dto/create-illust.dto';
import { UpdateIllustDto } from './dto/update-illust.dto';

@Injectable()
export class IllustsService {
  create(createIllustDto: CreateIllustDto) {
    return 'This action adds a new illust';
  }

  findAll() {
    return `This action returns all illusts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} illust`;
  }

  update(id: number, updateIllustDto: UpdateIllustDto) {
    return `This action updates a #${id} illust`;
  }

  remove(id: number) {
    return `This action removes a #${id} illust`;
  }
}
