import { Injectable } from '@nestjs/common';
import { CreateCicloFileDto } from './dto/create-ciclo-file.dto';
import { UpdateCicloFileDto } from './dto/update-ciclo-file.dto';

@Injectable()
export class CicloFilesService {
  create(createCicloFileDto: CreateCicloFileDto) {
    return 'This action adds a new cicloFile';
  }

  findAll() {
    return `This action returns all cicloFiles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cicloFile`;
  }

  update(id: number, updateCicloFileDto: UpdateCicloFileDto) {
    return `This action updates a #${id} cicloFile`;
  }

  remove(id: number) {
    return `This action removes a #${id} cicloFile`;
  }
}
