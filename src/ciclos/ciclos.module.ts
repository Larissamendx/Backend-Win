import { Module } from '@nestjs/common';
import { CiclosService } from './ciclos.service';
import { CiclosController } from './ciclos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ciclos } from './entities/ciclos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ciclos])],
  controllers: [CiclosController],
  providers: [CiclosService]
})
export class CiclosModule {}
