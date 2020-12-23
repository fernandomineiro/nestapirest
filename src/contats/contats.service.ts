import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ContatsEntity } from './contats.entity';
import { ContatsDTO } from './contats.dto';

@Injectable()
export class ContatsService {
    constructor(
        @InjectRepository(ContatsEntity)
        private contatsRepository: Repository<ContatsEntity>,
      ) {}
    
      async showAll() {
        return await this.contatsRepository.find();
      }
    
      async create(data: ContatsDTO) {
        const user = this.contatsRepository.create(data);
        await this.contatsRepository.save(data);
        return user;
      }
    
    
      async update(id: number, data: Partial<ContatsDTO>) {
        await this.contatsRepository.update({ id }, data);
        return await this.contatsRepository.findOne({ id });
      }
    
      async destroy(id: number) {
        await this.contatsRepository.delete({ id });
        return { deleted: true };
      }
}
