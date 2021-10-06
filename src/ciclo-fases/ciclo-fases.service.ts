import { Injectable } from '@nestjs/common';
import { CreateCicloFaseDto } from './dto/create-ciclo-fase.dto';
import { UpdateCicloFaseDto } from './dto/update-ciclo-fase.dto';

@Injectable()
export class CicloFasesService {
  create(createCicloFaseDto: CreateCicloFaseDto) {
    return 'This action adds a new cicloFase';
  }

  findAll() {
    return `This action returns all cicloFases`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cicloFase`;
  }

  update(id: number, updateCicloFaseDto: UpdateCicloFaseDto) {
    return `This action updates a #${id} cicloFase`;
  }

  remove(id: number) {
    return `This action removes a #${id} cicloFase`;
  }
}
