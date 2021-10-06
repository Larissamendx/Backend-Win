import { PartialType } from '@nestjs/mapped-types';
import { CreateCicloFileDto } from './create-ciclo-file.dto';

export class UpdateCicloFileDto extends PartialType(CreateCicloFileDto) {}
