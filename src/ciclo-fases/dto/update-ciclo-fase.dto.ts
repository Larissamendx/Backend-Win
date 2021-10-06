import { PartialType } from '@nestjs/mapped-types';
import { CreateCicloFaseDto } from './create-ciclo-fase.dto';

export class UpdateCicloFaseDto extends PartialType(CreateCicloFaseDto) {}
