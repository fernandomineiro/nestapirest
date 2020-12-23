import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContatsModule } from './contats/contats.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ContatsModule, TypeOrmModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
