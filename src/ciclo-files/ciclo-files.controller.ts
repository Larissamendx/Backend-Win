import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CicloFilesService } from './ciclo-files.service';
import { CreateCicloFileDto } from './dto/create-ciclo-file.dto';
import { UpdateCicloFileDto } from './dto/update-ciclo-file.dto';

@Controller('ciclo-files')
export class CicloFilesController {
  constructor(private readonly cicloFilesService: CicloFilesService) {}

  @Post()
  create(@Body() createCicloFileDto: CreateCicloFileDto) {
    return this.cicloFilesService.create(createCicloFileDto);
  }

  @Get()
  findAll() {
    return this.cicloFilesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cicloFilesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCicloFileDto: UpdateCicloFileDto) {
    return this.cicloFilesService.update(+id, updateCicloFileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cicloFilesService.remove(+id);
  }
}
