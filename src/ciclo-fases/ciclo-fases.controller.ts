import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CicloFasesService } from './ciclo-fases.service';
import { CreateCicloFaseDto } from './dto/create-ciclo-fase.dto';
import { UpdateCicloFaseDto } from './dto/update-ciclo-fase.dto';

@Controller('ciclo-fases')
export class CicloFasesController {
  constructor(private readonly cicloFasesService: CicloFasesService) {}

  @Post()
  create(@Body() createCicloFaseDto: CreateCicloFaseDto) {
    return this.cicloFasesService.create(createCicloFaseDto);
  }

  @Get()
  findAll() {
    return this.cicloFasesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cicloFasesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCicloFaseDto: UpdateCicloFaseDto) {
    return this.cicloFasesService.update(+id, updateCicloFaseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cicloFasesService.remove(+id);
  }
}
