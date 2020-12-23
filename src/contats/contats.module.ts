import { Module } from '@nestjs/common';
import { ContatsService } from './contats.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContatsController } from './contats.controller';
import { ContatsEntity } from './contats.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ContatsEntity])],
  controllers: [ContatsController],
  providers: [ContatsService]
})
export class ContatsModule {}
