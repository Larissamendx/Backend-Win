import { Injectable } from '@nestjs/common';
import { CreateAccessCodeDto } from './dto/create-access-code.dto';
import { UpdateAccessCodeDto } from './dto/update-access-code.dto';

@Injectable()
export class AccessCodeService {
  create(createAccessCodeDto: CreateAccessCodeDto) {
    return 'This action adds a new accessCode';
  }

  findAll() {
    return `This action returns all accessCode`;
  }

  findOne(id: number) {
    return `This action returns a #${id} accessCode`;
  }

  update(id: number, updateAccessCodeDto: UpdateAccessCodeDto) {
    return `This action updates a #${id} accessCode`;
  }

  remove(id: number) {
    return `This action removes a #${id} accessCode`;
  }
}
