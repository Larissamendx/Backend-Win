import { Module } from '@nestjs/common';
import { CicloFasesService } from './ciclo-fases.service';
import { CicloFasesController } from './ciclo-fases.controller';

@Module({
  controllers: [CicloFasesController],
  providers: [CicloFasesService]
})
export class CicloFasesModule {}
