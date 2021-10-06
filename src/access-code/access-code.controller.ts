import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AccessCodeService } from './access-code.service';
import { CreateAccessCodeDto } from './dto/create-access-code.dto';
import { UpdateAccessCodeDto } from './dto/update-access-code.dto';

@Controller('access-code')
export class AccessCodeController {
  constructor(private readonly accessCodeService: AccessCodeService) {}

  @Post()
  create(@Body() createAccessCodeDto: CreateAccessCodeDto) {
    return this.accessCodeService.create(createAccessCodeDto);
  }

  @Get()
  findAll() {
    return this.accessCodeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accessCodeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAccessCodeDto: UpdateAccessCodeDto) {
    return this.accessCodeService.update(+id, updateAccessCodeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accessCodeService.remove(+id);
  }
}
