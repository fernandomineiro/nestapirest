import {
    Controller,
    Get,
    Post,
    Patch,
    Delete,
    Body,
    Param,
    HttpStatus,
  } from '@nestjs/common';

  import { ContatsService } from './contats.service';
import { UsersDTO } from './users.dto';


@Controller('contats')
export class ContatsController {

    constructor(private contatsService: ContatsService) {}

    @Get()
    async showcontats() {
      return {
        statusCode: HttpStatus.OK,
        data: await this.contatsService.showAll(),
      };
    }
  
    @Post()
    async createContats(@Body() data: UsersDTO) {
      return {
        statusCode: HttpStatus.OK,
        message: 'Contato criado com sucesso',
        data: await this.contatsService.create(data),
      };
    }
  
    
  
    @Patch(':id')
    async updateContats(@Param('id') id: number, @Body() data: Partial<UsersDTO>) {
      return {
        statusCode: HttpStatus.OK,
        message: 'Contato atualizado com sucesso!',
        data: await this.contatsService.update(id, data),
      };
    }
  
    @Delete(':id')
    async deleteContats(@Param('id') id: number) {
      await this.contatsService.destroy(id);
      return {
        statusCode: HttpStatus.OK,
        message: 'Contato deletado com sucesso!',
      };
    }
}
