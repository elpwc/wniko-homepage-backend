import { Module } from '@nestjs/common';
import { IllustsService } from './illusts.service';
import { IllustsController } from './illusts.controller';

@Module({
  controllers: [IllustsController],
  providers: [IllustsService]
})
export class IllustsModule {}
