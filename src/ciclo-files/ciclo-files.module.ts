import { Module } from '@nestjs/common';
import { CicloFilesService } from './ciclo-files.service';
import { CicloFilesController } from './ciclo-files.controller';

@Module({
  controllers: [CicloFilesController],
  providers: [CicloFilesService]
})
export class CicloFilesModule {}
